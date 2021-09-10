import { useEffect, useRef, useState } from "react"
import { FaPause,FaPlay } from 'react-icons/fa'

export default function AudioPlayer() {

  const audioRef = useRef()
  const [icon, setIcon] = useState(<FaPlay className='icon-music-control'/>)
  const [play,pause] = useState(false)

  useEffect(() => {
    if(play){
      setIcon((<FaPause className='icon-music-control'/>))
      audioRef.current.play()
    }else(
      setIcon(<FaPlay className='icon-music-control'/>)
    )
  }, [play])

  const handleClick = ()=> {
    pause(!play)
  }

  return (
    <div>
      <div onClick={handleClick} className='bg-gray-400 mt-2 pl-2 w-48 rounded-xl'>
          <div className='py-4'>
            {icon}
            <audio ref={audioRef}></audio>
          </div>
        </div>
    </div>
  )
}
