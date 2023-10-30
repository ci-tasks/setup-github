import * as core from '@actions/core'
import {setup} from './setup'

async function run(): Promise<void> {
  try {
    const token: string = core.getInput('github-token')
    // setup the ginkgo
    await setup({token})
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
