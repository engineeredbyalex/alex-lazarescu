import { Html, Head, Main, NextScript } from 'next/document'
import { rem } from '../components/common/text/fonts/font'

export default function Document() {
  return (
    <Html lang="en" className={rem.className}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
