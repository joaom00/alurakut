import { SiteClient } from 'datocms-client'

export default async function handler(request, response) {
  if (request.method === 'POST') {
    const token = '596b76c3fc528eef74441d4abf6285'
    const client = new SiteClient(token)

    const comment = await client.items.create({
      itemType: '1051490',
      ...request.body
    })

    response.json({
      comment
    })

    return
  }
}
