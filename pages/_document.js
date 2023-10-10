import { Html, Head, Main, NextScript } from 'next/document'
import { kanit } from '../components/common/text/fonts/font'

export default function Document() {
  return (
    <Html lang="en" className={kanit.className}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
