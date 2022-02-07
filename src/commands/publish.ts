import { CliUx, Command } from "@oclif/core";
import { exec } from "child_process";
import * as fs from "fs";
import * as archiver from "archiver";
import * as path from 'path';
export default class Publish extends Command {
  static description = "Publish dist/ folder";

  static examples = [`$ rrochacli publish`];

  static flags = {};

  static args = [];

  async run(): Promise<void> {
    const fileName = process.cwd().split('/')[process.cwd().split('/').length - 1];
    const output = fs.createWriteStream(process.cwd() + `${fileName}.zip`);

    const dir = await CliUx.ux.prompt(`Publish current directory? ${process.cwd()}`);

    if (dir === '') {
      const arch = archiver("zip");

      output.on("close", () => {
        console.log(arch.pointer());
        console.log("done...");
      });

      arch.pipe(output);
      arch.directory(process.cwd(), false);
      arch.finalize();
    } else {
      this.error('Invalid directory!');
    }
  }
}
