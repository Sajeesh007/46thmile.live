import { IoPlaySkipBackSharp,IoPlaySkipForwardSharp } from 'react-icons/io5'
import { useControls } from '../../store/Context'
import Seeker from './Seeker'

export default function AudioController() {

  const {play,setPlay,miniIcon,audioRef} = useControls()

  const handleTrackClick = (position) => {
    audioRef.current.currentTime = position;
  }

  const handleClick = ()=> {
    setPlay(!play)
  }

  return (
    <div className='flex flex-col justify-center items-center space-y-4'>
      
      <div className='flex flex-col'>
        <Seeker handleInputChange={handleTrackClick}/>
      </div>      
      
      <div className='flex justify-between items-center w-48 px-4'>
        <IoPlaySkipBackSharp className='icon-music-control text-2xl'/>
        <div onClick={handleClick} className='flex justify-center items-center rounded-full gradient h-14 w-14'>
          {miniIcon}
        </div>
        <IoPlaySkipForwardSharp className='icon-music-control text-2xl'/>
      </div>   
    </div>
  )
}
