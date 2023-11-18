// importing style
import '@/styles/globals.css'
import '@/styles/navbar.css'
import '@/styles/loading.css'

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  }
}


export default function App({ Component, pageProps }) {
  return <Component  {...pageProps} />
}
