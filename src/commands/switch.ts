import { Command } from '@oclif/command'
import { exec } from 'shelljs'
import {
  existsSync,
  mkdirSync,
  writeFileSync,
 } from 'fs'
 import { normalize } from 'path'

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
    const { dataDir } = this.config
    const path = dataDir
    const list = await listVersions()

    if (!list.includes(version)) {
      console.error('Not a known version of Hasura')

      return
    }
    if(!existsSync(path)) {
      mkdirSync(normalize(path), { recursive: true })
    }
    const file = normalize(path + '/tmp.sh')
    writeFileSync(file, changeVersionBash(version))
    exec(`bash ${file}`, { shell: this.config.shell })
    console.log('version:', version)
  }
}
