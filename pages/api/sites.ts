import { NextApiRequest, NextApiResponse } from "next";

export type Site = {
    href: string,
    name: string,
    description: string,
    image: {
        href: string
        alt: string
    },
    tags: string[]
}

const sites: Site[] = [
  {
    description: 'Here you can find my github repositories 📝',
    href: 'https://github.com/felicksLindgren',
    image: {
      alt: '',
      href: ''
    },
    name: 'GitHub',
    tags: ['github', 'repositories']
  },
  {
    description: 'Early attempt at portfolio with a bunch of goodies 🍪',
    href: 'https://felixpwa.web.app/',
    image: {
      alt: 'Screenshot of index page from https://felixpwa.web.app/',
      href: '/../public/assets/felixpwa-web-app.png'
    },
    name: 'felixpwa.web.app',
    tags: ['angular', 'firebase']
  },
  {
    description: 'Testing out WebRTC with simple video chat 🎥',
    href: 'https://webrtc-1311e.web.app/',
    image: {
      alt: 'Screenshot of index page from https://webrtc-1311e.web.app/',
      href: '/../public/assets/felixpwa-web-app.png'
    },
    name: 'webrtc-1311e.web.app',
    tags: ['javascript', 'firebase', 'webrtc']
  },
  {
    description: 'Simple chat app 💬',
    href: 'https://react-superchat-81ad0.web.app/',
    image: {
      alt: 'Screenshot of index page from https://react-superchat-81ad0.web.app/',
      href: '/../public/assets/felixpwa-web-app.png'
    },
    name: 'react-superchat-81ad0.web.app',
    tags: ['react.js', 'firebase']
  }
]

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(sites);
}
