import { IoRadioOutline, IoAccessibility} from 'react-icons/io5'

import Logo from '../../public/logo.png'

export default function Header() {

  return (
    <div className='flex justify-between items-center h-10 px-6 pt-2 mt-2 '>
      <IoAccessibility className='w-8 h-8 border border-gray-300 rounded-full p-1 text-white'/>
      <div className='flex absolute top-3 right-6'>
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
      </div>
      <IoRadioOutline className='w-8 h-8 border border-gray-300 rounded-full p-1 text-white'/>
    
    </div>
  )
}
