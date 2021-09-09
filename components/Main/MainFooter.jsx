import { FaInstagram,FaSpotify } from 'react-icons/fa'

export default function MainFooter() {
  return (
    <div className='flex flex-col justify-center items-center tracking-wider mt-2'>
      <h1 className='text-xl text-center text-white font-semibold'>Follow Us</h1>
      <div className='flex '>
        <a href="https://www.instagram.com/46thmile.live" target='_blank'>
          <FaInstagram className='icon-social'/>
        </a>
        <a href="https://open.spotify.com/show/5K99VlN4wBnrnsbHu9UXbH" target='_blank'>
          <FaSpotify className='icon-social'/>
        </a>
        </div>
    </div>
  )
}
