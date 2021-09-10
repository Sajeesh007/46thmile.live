import Image from 'next/image'
import Link from 'next/link'
import demo from '../../public/demo.jpg'

export default function SmallCard({podcast}) {
  return (
    <>
      <Link href='/podcasts/Celebrity'>
        <a >
          <div className={`text-white flex ${podcast ? ' flex-col items-start justify-center mx-6 h-60 space-y-2'
            :'flex-col items-start justify-center' }`}>
            
            <Image src={demo.src} className='rounded-2xl object-fill' 
              width={podcast ? 400 : 300} height={podcast ? 500 : 300 }/>
    
            <div className={` w-full flex flex-col ${podcast && 'justify-center items-center'}`}>
              <h2 className='text-base font-merienda'>Celebrity.Live</h2> 
              <h3 className='text-sm '>ft. Shambu</h3>
            </div>
              
          </div>
        </a>
      </Link>
    </>
  )
}
