import mic from '../../public/mic.png'
import MainContent from './MainContent'
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'


export default function Main() {

  return (
    <>
      <div className='h-screen w-screen pt-2 pb-4 flex flex-col items-center
        bg-gray-400'>
        <MainHeader/> 
        <MainContent/> 
        {/* <MainFooter/> */}
      </div>
      <img src={mic.src} alt="background" className='fixed h-screen bottom-0 top-28 -right-8 transform scale-100'/>
    </>
  )
}
