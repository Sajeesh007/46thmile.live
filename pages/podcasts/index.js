import { useEffect } from "react"

import { usePodcast } from "../../store/Context";
import SmallCard from "../../components/Cards/SmallCard";
import { accessToken, podcast } from "../../utils/helper";


export default function Podcast() {

  const {podcastData,setPodcastData} = usePodcast()

  useEffect(() => { 
    if(podcastData === null){
      fetchPodcast()
    }
  }, [])

  const fetchPodcast = async ()=> {
    const masterRef = await accessToken()
    const podcasts = await podcast(masterRef,'desc')
    setPodcastData(podcasts.result)
  }

  return (
    <div>
      <div className='flex flex-col space-y-2 items-center justify-center pt-2 pb-36' >
        { podcastData?.map((items)=>(
          <SmallCard isPodcastPage={true} isPodcast key={items?.data?.details[1].text} title={items?.data?.title[0]?.text} artist={items?.data?.details[0].text} 
          image={items?.data?.image?.sub?.url} alt={items?.data?.image?.sub?.alt} uid={items?.uid}/>
        ))}
      </div> 
    </div>
  )
}
