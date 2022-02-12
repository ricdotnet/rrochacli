import {CliUx, Command, Flags} from "@oclif/core";

import axios from "axios";

export class Remove extends Command {
  static description = 'Delete an app.'

  static examples = [`$ rrochacli remove`];

  static flags = {
    app: Flags.string({char: 'a', required: false}),
  }

  static args = [];

  async run() {
    const {flags} = this.parse(Remove);

    if (flags.app) return this.log(flags.app);
    this.log('no flaggs ok')
  }
}
