import demo from '../../public/demo.jpg'
import { useEffect, useRef, useState } from "react"
import { FaPause,FaPlay } from 'react-icons/fa'

export default function MiniAudioPlayer() {

  const audioRef = useRef()
  const [icon, setIcon] = useState(<FaPlay className='icon-music-control'/>)
  const [play,setPlay] = useState(false)

  const audio ='https://p.scdn.co/mp3-preview/7507f6bb39f21c12c9d0f77da85d375db9fd2f81'

  useEffect(() => {
    if(play){
      setIcon((<FaPause className='icon-music-control'/>))
      audioRef.current.play()
    }else{
      setIcon(<FaPlay className='icon-music-control'/>)
      audioRef.current.pause()
    }
  }, [play])

  const handleClick = ()=> {
    setPlay(!play)
  }

  return (
    <div className='h-16 rounded-xl  bg-gradient-to-tr from-yellow-500 via-yellow-300 to-yellow-200 flex items-center justify-between text-white px-3' >
      <div className='flex justify-center items-center'>
        <img src={demo.src} alt='now_playing' className='w-10 h-10 rounded-sm'/>
        <div className='flex flex-col justify-center items-start px-2'>
          <h2 className='text-sm'>Now playing</h2>
          <h3 className='text-xs'>Celibrity.live</h3>
        </div>
      </div>
      <div onClick={handleClick} className='flex justify-center items-center'>
        {icon}
        <audio src={audio} ref={audioRef}></audio>
      </div>
    </div>
  )
}
