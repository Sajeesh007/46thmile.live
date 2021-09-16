import { useEffect } from "react"

import { usePodcast } from "../../store/Context";
import SmallCard from "../../components/Cards/SmallCard";
import { accessToken, podcasts } from "../../utils/helper";


export default function Podcast() {

  const {podcastData,setPodcastData} = usePodcast()

  useEffect(() => { 
    if(podcastData === null){
      fetchPodcast()
    }
  }, [])

  const fetchPodcast = async ()=> {
    const masterRef = await accessToken()
    const podcastDetails = await podcasts(masterRef,'desc')
    setPodcastData(podcastDetails.result)
  }

  return (
    <div>
      <div className='flex flex-col space-y-2 items-center justify-center pt-2 pb-36 min-h-screen'>
        { podcastData?.map((items)=>(
          <SmallCard isNotHome={true} isPodcast={true} key={items?.data?.details[1].text} title={items?.data?.title[0]?.text} artist={items?.data?.details[0].text} 
          image={items?.data?.image?.sub?.url} alt={items?.data?.image?.sub?.alt} uid={items?.uid} link={'/podcasts'}/>
        ))}
      </div> 
    </div>
  )
}
