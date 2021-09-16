import { useEffect} from "react"
import { useControls } from "../../store/Context"

import { IoPlaySharp,IoPause } from 'react-icons/io5'

export default function AudioSource() {

  

  const { play,setMiniIcon,setDuration,setCurrentTime,audioRef } = useControls()

  useEffect(() => {
    if(play){
      setMiniIcon((<IoPause className='icon-music-control text-3xl'/>))
      audioRef.current.play()
    }else{
      setMiniIcon(<IoPlaySharp className='icon-music-control text-3xl pl-0.5'/>)
      audioRef.current.pause()
    }
  }, [play])

  const track ='https://p.scdn.co/mp3-preview/7507f6bb39f21c12c9d0f77da85d375db9fd2f81'

  const current = (e) =>{
    setCurrentTime(e.target.currentTime)
    setDuration(e.target.duration)
  }

  return (
    <div>
      <audio
        ref={audioRef}
        onTimeUpdate={current}
      >
        <source src={track} />
      </audio>
    </div>
  )
}
