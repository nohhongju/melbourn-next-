import { Footer, Header, Nav } from '@/components'
import { wrapper } from '@/modules/store'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return <>
  <Header/>
  <Nav/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default wrapper.withRedux(App)
