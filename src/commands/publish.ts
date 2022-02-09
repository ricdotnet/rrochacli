import { CliUx, Command } from '@oclif/core';
import * as fs from 'fs';
import * as fsp from 'fs/promises';
import * as archiver from "archiver";
import axios from "axios";
import * as FormData from 'form-data';

import * as dotenv from 'dotenv';
dotenv.config();

export default class Publish extends Command {
  static description = 'Publish dist/ folder';

  static examples = [`$ rrochacli publish`];

  static flags = {};

  static args = [];

  async run(): Promise<void> {
    const currentFolder = process.cwd().split('/')[process.cwd().split('/').length - 1];
    const dir = await CliUx.ux.prompt(`Publish current directory? "/${currentFolder}" (yes:no)`);
    const name = await CliUx.ux.prompt('Enter a name for your app');
    const apiKey = await CliUx.ux.prompt('Enter your api key');

    const form = new FormData();
    form.append('project-name', `${name}.ricr.net`);
    // form.append('folder-name', )

    if (dir === 'yes') {
      const output = fs.createWriteStream(process.cwd() + `/${name}.zip`);
      const arch = archiver("zip");

      output.on("close", () => {
        console.log(arch.pointer());
        console.log("done...");
      });

      arch.pipe(output);
      arch.directory(process.cwd(), false);
      await arch.finalize();

      // fs.readFile(`${process.cwd()}/${fileName}`, (error, data) => {
      //   form.append('project', data);
      // });
      const data = await fsp.readFile(process.cwd() + '/${name}.zip');
      form.append('project', data);

      // axios.post('https://cli.ricr.net/send', {
      //   form,
      // }, {
      //   headers: {
      //     'api-key': apiKey,
      //   }
      // }).then((r) => {
      //   console.log(r.data.m);
      // }).catch((e) => {
      //   console.log(e);
      // });

    } else {
      this.error('Invalid directory!');
    }
  }
}
