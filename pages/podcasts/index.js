
import { usePodcast } from "../../store/Context";
import SmallCard from "../../components/Cards/SmallCard";

export default function Podcast() {

  const {podcastData} = usePodcast()

  return (
    <div>
      <div className='flex flex-col space-y-2 items-center justify-center pt-2 pb-36' >
        { podcastData?.map((items)=>(
          <SmallCard isPodcastPage={true} isPodcast key={items.details[1].text}title={items?.title[0]?.text} artist={items?.details[0].text} 
          image={items?.image?.sub?.url} alt={items?.image?.sub?.alt} />
        ))}
      </div> 
    </div>
  )
}
