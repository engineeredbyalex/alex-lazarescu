import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  }
}


export default function Document() {
  return (
    <Html lang="en">
      <Link rel="icon" href="/public/images/favicon.ico" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
