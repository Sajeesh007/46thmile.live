import Image from 'next/image'
import Link from 'next/link'
import demo from '../../public/demo.jpg'

export default function MainCard() {
  return (
    <>
      <Link href='/podcasts/c'>
        <a>
          <div className='relative'>
            <Image src={demo.src} className='rounded-3xl' width={285} height={300}/>
            <div className='absolute w-full h-36 bottom-0 pt-20 pl-2 inset-x-0 items-start justify-center flex flex-col
            bg-gradient-to-tr from-black via-transparent to-transparent text-white'>
              <h3 className='text-xs uppercase '>Celebrity.Live</h3>
              <h2 className='text-lg font-merienda'>ft. Shambu</h2>
            </div>
          </div>
          </a>
      </Link>
    </>
  )
}
