import { CliUx, Command } from '@oclif/core';
import * as fs from 'fs';
import * as archiver from "archiver";
import axios from "axios";
import * as FormData from 'form-data';

import * as util from 'util';
import * as cp from 'child_process';
const exec = util.promisify(cp.exec);

import * as os from 'os';
import * as path from 'path';

export default class Publish extends Command {
  static description = 'Publish a new app.';

  static examples = [`$ rrochacli publish`];

  static flags = {};

  static args = [];

  async run(): Promise<void> {

    const currentFolder = process.cwd().split('/')[process.cwd().split('/').length - 1];
    const dir = await CliUx.ux.prompt(`Publish current directory? "${currentFolder}" (yes:no)`);
    const name = await CliUx.ux.prompt('Enter a name for your app');
    const apiKey = await CliUx.ux.prompt('Enter your api key', {type: 'hide'});

    if (dir === 'yes') {

      console.log('\n');
      CliUx.ux.action.start('Uploading project...');

      const form = new FormData();
      form.append('project-name', `${name}.ricr.net`);
      const output = fs.createWriteStream(path.join(os.tmpdir(), `${name}.zip`));
      const arch = archiver('zip');

      output.on('close', function() {
        // console.log(arch.pointer() + ' total bytes');
        // console.log('archiver has been finalized and the output file descriptor has closed.');
      });

      output.on('close', () => {
        // console.log(arch.pointer());
        // console.log('done...');
      });

      arch.pipe(output);
      arch.directory(process.cwd(), false);
      await arch.finalize();

      form.append('project', fs.createReadStream(path.join(os.tmpdir(), `${name}.zip`)));

      axios.post('https://cli.ricr.net/send', form, {
        headers:  {
          'api-key': apiKey,
          ...form.getHeaders(),
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity
      }).then(async (r) => {
        await removeZip(name);

        CliUx.ux.action.stop('All complete!');
        console.log(`\nVisit your new app in: http://${name}.ricr.net`);
      }).catch(async (e) => {
        // if something breaks remove the newly created zip file...
        await removeZip(name);
        CliUx.ux.action.stop('\nOoops... Something went wrong. x.x');
      });

    } else {
      this.error('Invalid directory!');
    }
  }
}

async function removeZip(name: string) {
  if(!fs.readFileSync(path.join(os.tmpdir(), `${name}.zip`))) return;

  // this can be refactored too
  (os.platform() === 'win32')
    ? await exec(`del -r ${os.tmpdir()}\\${name}.zip`)
    : await exec(`rm -r ${os.tmpdir()}/${name}.zip`);
}
