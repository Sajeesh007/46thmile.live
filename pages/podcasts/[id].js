import MainCard from "../../components/Cards/MainCard";
import Explore from "../../components/Main/Explore";
import Content from "../../components/Podcast/Content";
import Controls from "../../components/Podcast/Controls";
import Heading from "../../components/Podcast/Heading";

export default function Podcast() {
  return (
    <div className='flex flex-col min-h-screen pb-16'>
      <MainCard/>
      <Heading title='Celibrity.live-EP1-Talk with RJ Shambu' date='March 31' length='4 min'/>
      <Controls/>
      <Content/>
      <Explore title='See other episodes'/>
    </div>
  )
}
