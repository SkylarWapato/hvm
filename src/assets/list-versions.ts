import fetch from 'node-fetch'

export const listVersions = async () => {
  const listReq = await fetch('https://api.github.com/repos/hasura/graphql-engine/releases')
  if(!listReq.ok) throw new Error('Network connection problem')
  const res = await listReq.json()
  return res.filter((item: any) => item.tag_name).map((item: any) => item.tag_name) as string[]
}
