import { Command, flags } from '@oclif/command'
import { exec } from 'child_process'

import { listVersions } from '../assets/list-versions'

// const updateScript = ""

export default class Switch extends Command {
  static description = 'Pass the desired version as a command line argument.'

  static examples = [
    `$ hvm switch v1.2.2`,
  ]

  static args = [{ name: 'version', required: true }]

  async run() {
    const {args: { version }} = this.parse(Switch)
    const list = await listVersions()
    console.log('version:', version)
    if (!list.includes(version)) {
      console.error('Not a known version of Hasura')

      return
    }
    const bash = exec(`bash ./src/assets/updatescript.sh ` + version)

    bash.stdout.on('data', data => console.log(data))
  }
}
