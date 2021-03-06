import { useRouter } from 'next/router'

import {BsChevronDown}from "react-icons/bs"
import {IoShareSocial}from "react-icons/io5"
import AudioController from "./AudioController"
import PageCard from "../Cards/PageCard"
import demo from '../../public/demo.jpg'
import { useEffect } from 'react'
import { useOther } from '../../store/Context'


export default function FullAudioPlayer() {

  const router = useRouter()

  const {setShowMusicPlayer} = useOther()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setShowMusicPlayer(false)
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  const handleClick = ()=>{
    setShowMusicPlayer(false)
    router.back()
    console.log(router.back)
  }

  const handleClickShare = async (e)=>{
    const shareData = {
      title: 'MDN',
      text: '46thmil.live, Keriyang Nokk Ketting Por',
      url: 'https://46thmile-live.vercel.app'
    }
    try {
      await navigator.share(shareData)
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className='fixed h-screen w-screen bg-black text-white top-0 z-100 '>

      <div className='flex flex-col space-y-8 px-6'>

        <div className='flex justify-between items-center pt-4 '>
          <div onClick={handleClick}>
            <BsChevronDown className='text-2xl'/>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h4 className='text-base'>Now playing from</h4>
            <h5 className='text-sm'>GECGRAM</h5>
          </div>
          <div onClick={handleClickShare}>
            <IoShareSocial className='text-2xl'/>
          </div>
        </div>

        <div className='flex flex-col space-y-3 pb-4'>
          <PageCard image={demo.src} alt='demo'/>
          <div className='flex flex-col flex-nowrap justify-center items-center'>
            <h2 className='text-xl text-center truncate w-72'>GECGRAM-EPISODE 04-PILLERU KOLLAM</h2>
            <h3 className='text-lg'>ft. RJ Rahul</h3>
          </div>
        </div>
       
        <div>
          <AudioController/>
        </div>
        
      </div>
    </div>
  )
}


  // const handleTouch =(e)=>{
  //   if(e.type === 'touchstart')
  //     console.log(e.changedTouches[0].clientY)
  //   else{
  //     console.log(e.changedTouches[0].clientY)
  //   }
  // }