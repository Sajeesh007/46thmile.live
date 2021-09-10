import Explore from '../components/Main/Explore'
import LatestEpisode from '../components/Main/LatestEpisode'
import MainHeader from '../components/Main/MainHeader'



export default function Home() {
  
  return (
    <div className="min-h-screen w-screen">
      <MainHeader/> 
      <div className='flex flex-col items-center mt-16'>
        <LatestEpisode/>
        <Explore/>
      </div>
    </div>
  )
}
