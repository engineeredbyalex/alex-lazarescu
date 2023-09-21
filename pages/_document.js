import { Html, Head, Main, NextScript } from 'next/document'
import { poppins } from '../components/common/text/fonts/font'

export default function Document() {
  return (
    <Html lang="en" className={poppins.className}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
