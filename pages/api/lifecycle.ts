// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'
export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const cookies = new Cookies(req, res)
  const accessToken = cookies.get('access_token')

  if (!accessToken) {
    return res.status(401).json({ message: 'Lifecycle is deactive.' })
  }

  return res.status(200).json({ message: 'Lifecycle is active.'})
}
