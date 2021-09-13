import Link from 'next/link'
import Image from 'next/image'

export default function PageCard({image,alt}) {

  return (
    <div className='flex flex-col justify-center items-center mt-4 rounded-3xl' >
      <Link href='/podcasts/d'>
        <a className='flex justify-center items-center' >
          <Image src={image} className='rounded-3xl' width={285} height={300} alt={alt}/>
        </a>
      </Link>
    </div>
  )
}

