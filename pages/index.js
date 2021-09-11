import MainCard from '../components/Cards/MainCard'
import Explore from '../components/Main/Explore'
import MainHeader from '../components/Main/MainHeader'

export default function Home() {
  
  return (
    <div className="min-h-screen">
      <MainHeader/> 
      <div className='flex flex-col items-center mt-16 mb-14'>
        <MainCard/>
        <Explore/>
      </div>
    </div>
  )
}
