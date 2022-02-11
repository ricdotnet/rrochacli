import { CliUx, Command } from '@oclif/core';
import * as fs from 'fs';
import * as archiver from "archiver";
import axios from "axios";
import * as FormData from 'form-data';

import * as util from 'util';
import * as cp from 'child_process';
const exec = util.promisify(cp.exec);

import * as dotenv from 'dotenv';
dotenv.config();

import * as os from 'os';

export default class Publish extends Command {
  static description = 'Publish dist/ folder';

  static examples = [`$ rrochacli publish`];

  static flags = {};

  static args = [];

  async run(): Promise<void> {

    // if (os.platform() !== 'darwin') {
    //   return console.log('Currently we only support MacOS :(');
    // }

    const currentFolder = process.cwd().split('/')[process.cwd().split('/').length - 1];
    const dir = await CliUx.ux.prompt(`Publish current directory? "/${currentFolder}" (yes:no)`);
    const name = await CliUx.ux.prompt('Enter a name for your app');
    const apiKey = await CliUx.ux.prompt('Enter your api key', {type: 'hide'});

    if (dir === 'yes') {

      console.log('\n');
      CliUx.ux.action.start('Uploading project...');

      const form = new FormData();
      form.append('project-name', `${name}.ricr.net`);
      const output = (os.platform() === 'win32') ? fs.createWriteStream(`${os.tmpdir()}\\${name}.zip`) : fs.createWriteStream(`/tmp/${name}.zip`);
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

      // fs.readFile(`${process.cwd()}/${fileName}`, (error, data) => {
      //   form.append('project', data);
      // });
      // const data = await fsp.readFile(path.join(process.cwd(), `${name}.zip`));
      // const file = await fs.createReadStream(path.join(process.cwd(), `${name}.zip`));
      form.append('project', (os.platform() === 'win32') ? fs.createReadStream(`${os.tmpdir()}\\${name}.zip`) : fs.createReadStream(`/tmp/${name}.zip`));

      axios.post('https://cli.ricr.net/send', form, {
        headers:  {
          'api-key': apiKey,
          ...form.getHeaders(),
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity
      }).then(async (r) => {
        // console.log(r.data.m);
        (os.platform() === 'win32') ? await exec(`del ${os.tmpdir()}\\${name}.zip`) : await exec(`rm -r /tmp/${name}.zip`);
        CliUx.ux.action.stop('All complete!');
        console.log(`\nVisit your new app in: https://${name}.ricr.net`);
      }).catch((e) => {
        console.log(e.message);
        CliUx.ux.action.stop('Ooops... Something went wrong. x.x');
      });

    } else {
      this.error('Invalid directory!');
    }
  }
}
