import demo from '../../public/demo.jpg'
import { useEffect } from "react"
import { IoPlaySharp,IoPause } from 'react-icons/io5'
import { useControls } from '../../store/Context'

export default function MiniAudioPlayer({show}) {
  
  const { play,setPlay,miniIcon,setMiniIcon,audioRef } = useControls()

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
    <div className='h-16 my-0.5 rounded-xl bg-gradient-to-tr from-yellow-500 via-yellow-300 to-yellow-200 flex items-center justify-between text-white px-3' >
      <div className='flex justify-start items-center w-full mr-2 h-full' onClick={show}>
        <img src={demo.src} alt='now_playing' className='w-10 h-10 rounded-sm'/>
        <div className='flex flex-col justify-center items-start px-2'>
          <h2 className='text-sm'>Now playing</h2>
          <h3 className='text-xs'>Celibrity.live</h3>
        </div>
      </div>
      <div onClick={handleClick} className='flex justify-center items-center'>
        {miniIcon}
        <audio src={audio} ref={audioRef}></audio>
      </div>
    </div>
  )
}
