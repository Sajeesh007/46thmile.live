import Content from "../../components/Podcast/Content";
import Controls from "../../components/Podcast/Controls";
import Heading from "../../components/Podcast/Heading";
import PageCard from '../../components/Cards/PageCard';
import { accessToken, podcastSearch, podcasts } from '../../utils/helper';

export default function Podcast({podcasts}) {

  return (
    <div className='flex flex-col min-h-screen pb-32'>
      <PageCard  image={podcasts?.result[0]?.image?.sub?.url} alt={podcasts?.result[0]?.image?.sub?.alt}/>
      <Heading title={podcasts?.result[0]?.title[0]?.text} artist={podcasts?.result[0]?.details[0].text} />
      <Controls date={podcasts?.result[0]?.release_date} length={podcasts?.result[0]?.length} 
        title={podcasts?.result[0]?.title[0]?.text} content={podcasts?.result[0]?.details[2].text}/>
      <Content content={podcasts?.result[0]?.details[2].text}/>
    </div>
  )
}

export async function getStaticPaths(){

  const masterRef = await accessToken()
  const podcastUid = await podcasts(masterRef,'desc')

  const paths = podcastUid?.uid?.map((uid) => ({
    params: { id: uid },
  }))
  

  return { 
    paths, fallback: false 
  }

}

export async function getStaticProps({ params }){
  
  const masterRef = await accessToken()
  const podcastData = await podcastSearch(masterRef,params.id)

  return { 
    props: {
      podcasts : podcastData
    } 
  }
}