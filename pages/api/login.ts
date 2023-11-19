// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'
import moment from 'moment'
export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const cookies = new Cookies(req, res)

  cookies.set('access_token', 'ANBJNCBJBsadkljlaskdkla'.toUpperCase(), {
    httpOnly: true,
    sameSite: 'lax',
    expires: new Date(moment(new Date()).utcOffset(7).add(5, 'minutes').format("YYYY/MM/DD HH:mm")),
  })

  res.status(200).json({ message: 'Lifecycle is active.' })
}
