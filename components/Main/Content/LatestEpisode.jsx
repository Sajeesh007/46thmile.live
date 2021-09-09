import { useEffect, useRef, useState } from "react"
import { FaPause,FaPlay } from 'react-icons/fa'

export default function LatestEpisode() {

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
      <div className='flex flex-col justify-center items-center text-black bg-gray-100 rounded-xl w-52 my-2'>
        
        <h2 className='font-semibold text-lg px-2 pt-4'>Latest episode</h2>
        
        <div onClick={handleClick} className='bg-gray-400 mt-2 pl-2 w-48 rounded-xl'>
          <div className='py-4'>
            {icon}
            <audio ref={audioRef}></audio>
          </div>
        </div>
        
        <div className='font-semibold text-sm flex flex-col justify-center items-center px-2 py-2 bg-gray-300 mx-2 my-2 rounded-2xl'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sequi tempora laboriosam hic, cum velit.
          </p>
        </div>
      </div>
    </div>
  )
}
