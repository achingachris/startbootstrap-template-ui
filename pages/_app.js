import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.css'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
