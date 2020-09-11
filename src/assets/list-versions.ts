import fetch from 'node-fetch'

export const listVersions = async () => {
  const listReq = await fetch('https://api.github.com/repos/hasura/graphql-engine/releases')
  if(!listReq.ok) throw new Error('Network connection problem')
  const res = await listReq.json()
  return res.map((item: any) => item.name).filter((item: string) => !item.includes(' ')) as string[]
}
