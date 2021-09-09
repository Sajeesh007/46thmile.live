import { FiMenu } from 'react-icons/fi'
import Logo from '../public/logo.png'

export default function Navbar() {

  console.log(Logo);

  return (
    <div className='bg-black text-white flex justify-between items-center w-screen h-16 pl-2 '>
      <div className='flex h-12 w-12 justify-center items-center rounded-full bg-white p-1'>
        <FiMenu className='text-black'/>
      </div>
      <div className='flex justify-center items-center'>
        <div className='h-12 w-12'>
          <img src={Logo.src} alt="logo" />
        </div>
        <div>
          <h1>46thmile.live</h1>
        </div>
      </div>
    </div>
  )
}
