import MainCard from '../components/Cards/MainCard'
import Explore from '../components/Main/Explore'
import MainHeader from '../components/Main/MainHeader'
import Slider from '../components/Main/Slider'

export default function Home() {
  
  
  return (
    <div className="min-h-screen pb-16 ">
      <MainHeader/> 
      <div className='flex flex-col items-center justify-center pb-16 '>
        <Slider/>
        <div>
          <Explore title='Podcasts' isHome={true}/>
          <Explore title='Events' isHome={true}/>
        </div>
        
      </div>
    </div>
  )
}
