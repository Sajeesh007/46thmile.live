import FooterMenu from '../components/Navbar/FooterMenu'
import Header from '../components/Navbar/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <div className='bg-black '>
      <Header/>
      <Component {...pageProps} />
      <FooterMenu/>
    </div>
  )
}

export default MyApp
