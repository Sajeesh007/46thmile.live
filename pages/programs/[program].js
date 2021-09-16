import Content from "../../components/Podcast/Content";
import Controls from "../../components/Podcast/Controls";
import Heading from "../../components/Podcast/Heading";
import PageCard from '../../components/Cards/PageCard';
import { accessToken, eventSearch, events } from '../../utils/helper';

export default function Program({program}) {

  return (
    <div className='flex flex-col min-h-screen pb-32'>
      <PageCard  image={program?.result[0]?.image?.sub?.url} alt={program?.result[0]?.image?.sub?.alt}/>
      <Heading title={program?.result[0]?.title[0]?.text} />
      <Content content={program?.result[0]?.details[2].text}/>
    </div>
  )
}

export async function getStaticPaths(){

  const masterRef = await accessToken()
  const programsUid = await events(masterRef,'desc')

  const paths = programsUid?.uid?.map((uid) => ({
    params: { program: uid}
  }))

  return { 
    paths, fallback: false 
  }
}

export async function getStaticProps({ params }){

  const masterRef = await accessToken()
  const program = await eventSearch(masterRef,params.program)

  return { 
    props: {
      program : program
    } 
  }
}
