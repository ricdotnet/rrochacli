import { CliUx, Command } from "@oclif/core";
import * as fs from "fs";
import * as archiver from "archiver";
export default class Publish extends Command {
  static description = "Publish dist/ folder";

  static examples = [`$ rrochacli publish`];

  static flags = {};

  static args = [];

  async run(): Promise<void> {
    const fileName = process.cwd().split('/')[process.cwd().split('/').length - 1];
    const dir = await CliUx.ux.prompt(`Publish current directory? "/${fileName}" (yes:no)`);
    const name = await CliUx.ux.prompt('Enter a name for your app:');

    if (dir === 'yes') {
      const output = fs.createWriteStream(process.cwd() + `/${name}.zip`);
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
