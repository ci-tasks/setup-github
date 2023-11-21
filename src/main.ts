import * as ps from 'child_process'
import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    const token: string = core.getInput('github-token')
    const directory = github.context.repo

    // setup the Github environment
    core.info(`Setup a GitHub environment...`)

    // declare the commands
    const commands = [
      `git config --global user.name GitHub Action`,
      `git config --global user.email github-actions@users.noreply.github.com`,
      `git config --global url."https://${token}:x-oauth-basic@github.com/".insteadOf "https://github.com/"`
    ]

    // execute ths commands
    for (const cmd of commands) {
      ps.execSync(cmd)
    }

    core.info(`Export a GitHub environment...`)
    // export the environment variables
    core.exportVariable('GH_REPOSITORY_NAME', directory.repo)
    core.exportVariable('GH_DOCKER_REGISTRY', `ghcr.io/${directory.owner}`)
    // done!
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

run()
