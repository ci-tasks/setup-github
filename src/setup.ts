import {exec} from 'child_process'

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

export async function setup({token}: Input): Promise<void> {
  await execute(`git config --global user.name GitHub Action`)
  await execute(
    `git config --global user.email github-action@users.noreply.github.com`
  )
  await execute(
    `git config --global url."https://${token}:x-oauth-basic@github.com/".insteadOf "https://github.com/"`
  )
}
