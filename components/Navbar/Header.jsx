import { useState} from 'react'
import SideMenu from './SideMenu'
import { IoRadioOutline} from 'react-icons/io5'
import { HiMenuAlt2} from 'react-icons/hi'

import Logo from '../../public/logo.png'

export default function Header() {

  const [showSideMenu, setShowSideMenu] = useState(false)

  const handleClick = () =>{
    setShowSideMenu(!showSideMenu)
  }
 
  return (
    <>
      {showSideMenu && 
        <div className='relative z-50'>
          <SideMenu hideMenu={handleClick}/>
        </div>
      }
      <div className='flex justify-between items-center h-14 px-6 z-10 '>

        <div className='' onClick={handleClick}>
          <HiMenuAlt2 className='w-8 h-8 rounded-full p-1 text-white' />
        </div>

        <div className='flex absolute top-3 right-6'>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </div>
        
        <div className='text-white'>
          <img src={Logo.src} alt="logo" width={45} height={45}/>
        </div>

        <IoRadioOutline className='w-8 h-8  rounded-full p-1 text-white'/>
      </div>
    </>
  )
}
