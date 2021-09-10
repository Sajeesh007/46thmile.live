import Head from 'next/head'
import MainContent from '../components/Main/MainContent'
import FooterMenu from '../components/Navbar/FooterMenu'
import Header from '../components/Navbar/Header'


export default function Home() {
  
  return (
    <div className="flex flex-col bg-black min-h-screen w-screen">
      <Header/>
      <MainContent/>
      <FooterMenu/>
    </div>
  )
}
