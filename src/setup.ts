import {exec} from 'child_process'
import core from '@actions/core'

type Input = {
  token: string
}

type Result = {
  stdout: string
  stderr: string
}

async function execute(cmd: string): Promise<Result> {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err)
      } else {
        resolve({stdout, stderr})
      }
    })
  })
}

export async function setup(input: Input): Promise<void> {
  core.info(`Setup a GitHub environment...`)

  // declare the commands
  const commands = [
    `git config --global user.name GitHub Action`,
    `git config --global user.email github-actions@users.noreply.github.com`,
    `git config --global url."https://${input.token}:x-oauth-basic@github.com/".insteadOf "https://github.com/"`
  ]

  // execute ths commands
  for (const cmd of commands) {
    await execute(cmd)
  }

  core.info(`Export a Golang environment...`)
  // export the golang environment
  core.exportVariable(
    'GOPRIVATE',
    `github.com/${process.env.GITHUB_REPOSITORY_OWNER}/*`
  )
}
