import { AiFillHome, AiOutlineTeam } from "react-icons/ai";
import { FaPodcast } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { MdEventNote} from "react-icons/md";
import SideMenuItems from "./SideMenuItems";

export default function SideMenu({hideMenu}) {

  return (
    <>
      <div className='absolute top-0 flex flex-row justify-between w-full h-screen text-white' onClick={hideMenu}>
        <div className='flex flex-col items-start bg-black w-72 py-3 px-6 space-y-4'>

          <div className='flex justify-start items-center space-x-10 w-full'>
            <div>
                <IoCloseSharp className='text-white text-3xl' onClick={hideMenu}/>
            </div>
            <h3 className='text-xl'>46thmile.live</h3>
          </div>

          <div className='flex flex-col justify-center items-start space-y-4 '>
            <SideMenuItems icon={<AiFillHome className='menu-icon text-3xl'/>} name='Home' path='/'/>
            <SideMenuItems icon={<FaPodcast className='menu-icon text-3xl'/>} name='Podcasts' path='/podcasts'/>
            <SideMenuItems icon={<MdEventNote className='menu-icon text-3xl'/>} name='Other programs' path='/events'/>
            <SideMenuItems icon={<AiOutlineTeam className='menu-icon text-3xl'/>} name='About Us' path='/about'/>
          </div>

        </div>
        <div className='bg-black w-20 filter opacity-50 blur' onClick={hideMenu}>
          s
        </div>
      </div>
      
    </>
  )
}
