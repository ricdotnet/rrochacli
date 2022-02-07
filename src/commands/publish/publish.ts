import {Command} from '@oclif/core'

export default class Publish extends Command {
  static description = 'Publish dist/ folder'

  static examples = [
    `$ rrochacli publish`,
  ]

  static flags = {}

  static args = []

  async run(): Promise<void> {
    this.log('Website published?')
  }
}
