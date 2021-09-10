import { FaPodcast } from "react-icons/fa"
import { AiFillHome } from "react-icons/ai"
import { BsInfo } from "react-icons/bs"

export default function FooterMenu() {
  return (
    <div className='fixed w-screen h-16 flex justify-around items-center text-gray-400 bottom-0 pb-2
    bg-gradient-to-t from-black via-black to-transparent'>
      <div className='flex flex-col justify-center items-center text-xs'>
        <FaPodcast className='menu-icon'/>
        <p>Podcasts</p>
      </div>

      <div className='flex flex-col justify-center items-center text-xs rounded-full w-14 h-14 
        bg-gradient-to-tr from-yellow-600 via-yellow-400 to-yellow-200'>
        <AiFillHome className='menu-icon text-3xl'/>
      </div>

      <div className='flex flex-col justify-center items-center text-xs'>
      <BsInfo className='menu-icon'/>
      <p>About</p>
      </div>

    </div>
  )
}