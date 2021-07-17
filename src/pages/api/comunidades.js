import { SiteClient } from 'datocms-client'

export default async function handler(request, response) {
  if (request.method === 'POST') {
    const token = '596b76c3fc528eef74441d4abf6285'
    const client = new SiteClient(token)

    const community = await client.items.create({
      itemType: '975434',
      ...request.body
    })

    response.json({
      community
    })

    return
  }
}
