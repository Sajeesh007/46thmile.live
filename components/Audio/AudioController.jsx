import { useEffect, useState } from 'react'
import { IoPlaySharp,IoPause,IoPlaySkipBackSharp,IoPlaySkipForwardSharp } from 'react-icons/io5'
import { useControls } from '../../store/Context'
import AudioSource from './AudioSource'
import Seeker from './Seeker'

export default function AudioController() {

  const {play,setPlay,fullIcon,setFullIcon,audioRef} = useControls()

  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    if(play){
      setFullIcon((<IoPause className='icon-music-control text-4xl'/>))
      audioRef.current.play()
    }else{
      setFullIcon(<IoPlaySharp className='icon-music-control text-4xl pl-1'/>)
      audioRef.current.pause()
    }
  }, [play])

  const handleTrackClick = (position) => {
    audioRef.current.currentTime = position;
  }

  const handleClick = ()=> {
    setPlay(!play)
  }

  return (
    <div className='flex flex-col justify-center items-center space-y-4'>
      
      <div className='flex flex-col'>
        <Seeker max={duration} value={currentTime} min={0} handleInputChange={handleTrackClick}/>
      </div>      
      
      <div className='flex justify-between items-center w-48 px-4'>
        <IoPlaySkipBackSharp className='icon-music-control text-2xl'/>
        <div onClick={handleClick} className='flex justify-center items-center rounded-full gradient h-14 w-14'>
          {fullIcon}
          <AudioSource handleDuration={setDuration} handleCurrentTime={setCurrentTime}/>
        </div>
        <IoPlaySkipForwardSharp className='icon-music-control text-2xl'/>
      </div>   
    </div>
  )
}
