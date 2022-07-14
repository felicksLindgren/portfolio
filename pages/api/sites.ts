import { NextApiRequest, NextApiResponse } from "next";

export type Site = {
    href: string,
    name: string,
    image: {
        href: string
        alt: string
    }
}

export default async function sites(req: NextApiRequest, res: NextApiResponse) {
  const sites: Site[] = [
    {
        href: '',
        name: '',
        image: {
            alt: '',
            href: ''
        }
    }
  ]

  res.status(200).json(sites);
}
