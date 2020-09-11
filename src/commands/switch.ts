import { Command, flags } from '@oclif/command'
import { execSync } from 'child_process'

import { listVersions } from '../assets/list-versions'
import { changeVersionBash } from '../assets/bash'

export default class Switch extends Command {
  static description = 'Pass the desired version as a command line argument.'

  static examples = [
    `$ hvm switch v1.2.2`,
  ]

  static args = [{ name: 'version', required: true }]

  async run() {
    const {args: { version }} = this.parse(Switch)
    const list = await listVersions()

    if (!list.includes(version)) {
      console.error('Not a known version of Hasura')

      return
    }
    console.log('this.config.bin:', this.config.shell)
    execSync(`eval ${changeVersionBash(version)}`, { shell: this.config.shell })
    // exec(`echo "test"`, { shell: this.config.shell })
    console.log('version:', version)
  }
}
