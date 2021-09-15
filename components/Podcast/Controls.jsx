import { useEffect, useRef, useState } from 'react'
import { IoPlaySharp,IoPause } from 'react-icons/io5'
import { IoMdShare} from 'react-icons/io'
import { MdAdd } from 'react-icons/md'
import { useControls,useOther } from '../../store/Context'

export default function Controls({date,length}) {

  const audioRef = useRef()
  
  const {play,setPlay,miniIcon,setMiniIcon} = useControls()


  const audio ='https://p.scdn.co/mp3-preview/7507f6bb39f21c12c9d0f77da85d375db9fd2f81'

  useEffect(() => {
    if(play){
      setMiniIcon((<IoPause className='icon-music-control text-3xl'/>))
      audioRef.current.play()
    }else{
      setMiniIcon(<IoPlaySharp className='icon-music-control text-3xl'/>)
      audioRef.current.pause()
    }
  }, [play])

  const handleClick = ()=> {
    setPlay(!play)
  }

  return (
    <div className='flex justify-between text-white px-8 pb-4 space-x-2 pt-2'>
      <div className='flex space-x-2'>
        <div className='flex justify-center items-center rounded-full bg-yellow-400 h-12 w-12' onClick={handleClick}>
          {miniIcon}
          <audio src={audio} ref={audioRef}></audio>
        </div>
        <div className='flex flex-col text-sm justify-center items-start'>
          <p>{date}</p> 
          <p>{length} mins</p>
        </div>
      </div>
      
      <div className='flex justify-center items-center space-x-4'>
        <IoMdShare className='text-2xl'/>
        <MdAdd className='text-3xl'/>
      </div>
    </div>
  )
}
