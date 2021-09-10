import Explore from "./Content/Explore";
import LatestEpisode from "./Content/LatestEpisode";
import MainHeader from "./MainHeader";

export default function MainContent() {
 
  return (
    <div className=''>
      <MainHeader/> 
      <div className='flex flex-col items-center mt-16'>
        <LatestEpisode/>
        <Explore/>
      </div>
    </div>
  )
}
