import {expect, test} from '@oclif/test'

describe('publish', () => {
  test
  .stdout()
  .command(['publish'])
  .it('runs publish cmd', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })
})
