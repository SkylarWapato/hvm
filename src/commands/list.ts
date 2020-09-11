import { Command } from '@oclif/command'

import { listVersions } from '../assets/list-versions'

// const updateScript = ""

export default class List extends Command {
  static description = 'Returns a list of available clis'

  static examples = [
    `$ hvm switch v1.2.2`,
  ]

  async run() {
    const list = await listVersions()
    list.forEach(i => console.log(i))
  }
}
