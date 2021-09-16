import '../styles/globals.css'
import circle from '../public/circle-scatter.svg'

import {Context, useOther} from '../store/Context'
import FooterMenu from '../components/Navbar/FooterMenu'
import Header from '../components/Navbar/Header'



function MyApp({ Component, pageProps }) {

  

  return (
    <div className='bg-black' 
    // style={{
    //     backgroundImage: `url(${circle.src})`,
    //     objectFit : 'cover',
    //     backgroundRepeat : 'repeat-y',
    //   }}
      >
      <Context>
        <Header />
        <Component {...pageProps}/>
        <FooterMenu/>
        
      </Context>
    </div>
  )
}

export default MyApp
