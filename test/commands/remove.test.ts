import {expect, test} from '@oclif/test'

describe('remove', () => {
  test
    .stdout()
    .command(['remove'])
    .it('runs remove cmd', ctx => {
      expect(ctx.stdout).to.contain('appname');
    })
})
