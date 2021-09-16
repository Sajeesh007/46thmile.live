import demo from '../../public/demo.jpg'

import { useControls } from '../../store/Context'
import AudioSource from './AudioSource'

export default function MiniAudioPlayer({show}) {
 
  const { play,setPlay,miniIcon} = useControls()

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
        <AudioSource/>
      </div>
    </div>
  )
}
