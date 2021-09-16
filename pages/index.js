import { podcasts,accessToken, events } from '../utils/helper'
import { usePodcast } from '../store/Context'

import { useEffect } from 'react'

import Explore from '../components/Main/Explore'
import MainHeader from '../components/Main/MainHeader'
import Slider from '../components/Main/Slider'


export default function Home({podcasts,programs}) {
  
  const {setPodcastData, setProgramsData} = usePodcast()


  useEffect(() => {
    setPodcastData(podcasts.result)
    setProgramsData(programs.result)
    console.log(podcasts.result)
  }, [])
  
  return (
    <div className="min-h-screen pb-32">
      <div className='flex flex-col items-center justify-center'>
        <MainHeader/> 
        <div className='flex justify-center items-center '>
          <Slider/>
        </div>
        <div className='mt-2'>
          <Explore title='Podcasts' isHome={true} data={podcasts?.result} link={'/podcasts'} isPodcast={true}/>
          <Explore title='Other Programs' isHome={true} data={programs?.result} link={'/programs'} isPodcast={false}/>
        </div>
        
      </div>
    </div>
  )
}

export async function getStaticProps(){

  const masterRef = await accessToken()
  const podcastsData = await podcasts(masterRef,'desc')
  const programsData = await events(masterRef,'desc')

  return {
    props : {
      podcasts : podcastsData,
      programs : programsData
    }
    
  }
}