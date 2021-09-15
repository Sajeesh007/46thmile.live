import Link from 'next/link'

import MiniAudioPlayer from '../../components/Audio/MiniAudioPlayer'
import { FaPodcast } from "react-icons/fa"
import { AiFillHome, AiOutlineTeam } from "react-icons/ai"
import FullAudioPlayer from '../Audio/FullAudioPlayer'
import { useOther } from '../../store/Context'


export default function FooterMenu() {

  const {showMusicPlayer,setShowMusicPlayer} = useOther()

  const handleShow = () =>{
    setShowMusicPlayer(!showMusicPlayer)
  }


  return (
    <div className='flex flex-col'>
      <div>
        {showMusicPlayer && <FullAudioPlayer hide={handleShow}/>}
      </div>
      <div className='fixed w-full bottom-16 px-3' >
        <MiniAudioPlayer show={handleShow}/>
      </div>
      <div className='fixed w-full h-16 flex justify-around items-center text-gray-400 -bottom-1 pb-3
      bg-gradient-to-t from-black to-transparent'>
        <Link href='/podcasts'><a>
          <div className='flex flex-col justify-center items-center text-xs'>
            <FaPodcast className='menu-icon'/>
            <p>Podcasts</p>
          </div>
        </a></Link>

        <Link href='/'><a>
          <div className='flex flex-col justify-center items-center text-xs rounded-full w-14 h-14 
            bg-gradient-to-tr from-yellow-600 via-yellow-400 to-yellow-200'>
            <AiFillHome className='menu-icon text-3xl'/>
          </div>
        </a></Link>
        

        <Link href='/about'><a>
          <div className='flex flex-col justify-center items-center text-xs' id='install'>
            <AiOutlineTeam className='menu-icon'/>
            <p>About Us</p>
          </div>
        </a></Link>
      </div>
    </div>
  )
}
