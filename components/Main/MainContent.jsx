import Explore from "./Content/Explore";
import LatestEpisode from "./Content/LatestEpisode";
import MainFooter from "./MainFooter";

export default function MainContent() {
 
  return (
    <>
      <div className='flex flex-col lg:flex-row items-center w-screen pr-24'>
        <LatestEpisode/>
        <Explore/>
      </div>
      <div className=''>
        <MainFooter/>
      </div>
  </>
  )
}
