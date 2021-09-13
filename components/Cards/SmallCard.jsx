import Image from 'next/image'
import Link from 'next/link'
import demo from '../../public/demo.jpg'
import jass from '../../public/jass.jpeg'

export default function SmallCard({isPodcastPage,title,artist,image,alt,isPodcast }) {
  return (
    <>
      <Link href='/podcasts/Celebrity'>
        <a>
          <div className={`text-white flex flex-col justify-center${isPodcastPage ? ' items-center h-60 space-y-2 w-80'
            :'items-start h-40 w-40' }`}>
            
            <Image src={image} className='rounded-2xl object-fill' 
              width={isPodcastPage ? 400 : 400} height={isPodcastPage ? 500 : 400 } alt={alt}/>
    
            <div className={`w-full flex flex-col ${isPodcastPage && 'justify-center items-center'}`}>
              <h2 className='text-sm truncate mt-1 '>{title}</h2> 
              {isPodcast && <h3 className='text-xs text-gray-400 truncate'>feat. {artist}</h3> }
            </div>
              
          </div>
        </a>
      </Link>
    </>
  )
}
