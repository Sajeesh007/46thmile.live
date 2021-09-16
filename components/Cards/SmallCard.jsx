import Image from 'next/image'
import Link from 'next/link'

export default function SmallCard({isNotHome,title,artist,image,alt,isPodcast,uid,link }) {

  return (
    <>
      <Link href={`${link}/${uid}`}>
        <a>
          <div className={`text-white flex flex-col justify-center${isNotHome ? ' items-center h-60 space-y-2 w-80 uppercase'
            :'items-start h-40 w-40' }`}>
            
            <Image src={image} className='rounded-2xl object-fill' 
              width={isNotHome ? 400 : 400} height={isNotHome ? 500 : 400 } alt={alt}/>
    
            <div className={`w-full flex flex-col ${isNotHome && 'justify-center items-center text-center'}`}>
              <h2 className={`text-sm truncate mt-1 ${isNotHome && 'justify-center items-center  text-lg w-80'}`}>{title}</h2> 
              {isPodcast && <h3 className='text-sm text-gray-400 truncate'>feat. {artist}</h3> }
            </div>
              
          </div>
        </a>
      </Link>
    </>
  )
}
