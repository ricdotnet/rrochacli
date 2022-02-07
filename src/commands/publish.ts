import { Command } from "@oclif/core";
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
    console.log(__dirname);
    const output = fs.createWriteStream(process.cwd() + "/res/test.zip");

    const arch = archiver("zip");

    output.on("close", () => {
      console.log(arch.pointer());
      console.log("done...");
    });

    arch.pipe(output);
    arch.append("hello.txt", { name: "hello.txt" });
    arch.finalize();
  }
}
