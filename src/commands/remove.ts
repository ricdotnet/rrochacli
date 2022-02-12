import {CliUx, Command, Flags} from "@oclif/core";

import axios from "axios";

export class Remove extends Command {
  static description = 'Delete an app.'

  static examples = [`$ rrochacli remove`];

  static flags = {}

  static args = [];

  async run() {

  }
}
