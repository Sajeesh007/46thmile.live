import { useEffect, useRef, useState } from 'react'
import { FaPause,FaPlay } from 'react-icons/fa'
import { IoMdShare } from 'react-icons/io'
import { MdAdd } from 'react-icons/md'

export default function Controls() {

  const audioRef = useRef()
  const [icon, setIcon] = useState(<FaPlay className='icon-music-control'/>)
  const [play,setPlay] = useState(false)

  const audio ='https://p.scdn.co/mp3-preview/7507f6bb39f21c12c9d0f77da85d375db9fd2f81'

  useEffect(() => {
    if(play){
      setIcon((<FaPause className='icon-music-control '/>))
      audioRef.current.play()
    }else{
      setIcon(<FaPlay className='icon-music-control '/>)
      audioRef.current.pause()
    }
  }, [play])

  const handleClick = ()=> {
    setPlay(!play)
  }

  return (
    <div className='flex text-white px-10 pb-4 space-x-2'>
      <div className='flex justify-center items-center rounded-full bg-yellow-400 h-12 w-12' onClick={handleClick}>
        {icon}
        <audio src={audio} ref={audioRef}></audio>
      </div>
      <div className='flex justify-center items-center px-3 space-x-4'>
        <IoMdShare className='text-2xl'/>
        <MdAdd className='text-3xl'/>
      </div>
    </div>
  )
}
