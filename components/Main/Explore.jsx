import Link from 'next/link'

import SmallCard from "../Cards/SmallCard"

export default function Explore({isHome,title,data,isPodcast}) {

  return (
    <div className='flex flex-col text-white py-2'>
      <div className='flex justify-between items-center px-3 pb-1'>
        <h1 className='text-lg' >{title}</h1>
        {isHome && <Link href='/podcasts'><a><h3 className='text-xs text-gray-400'>See All</h3></a></Link>}
      </div>
      <div className='flex px-3 space-x-4 overflow-x-auto w-screen' >
        {data?.map((items)=>(
          <SmallCard key={items.details[1].text} title={items?.title[0]?.text} artist={items?.details[0].text} 
            image={items?.image?.sub?.url} alt={items?.image?.sub?.alt} isPodcast/>
        ))}
      </div>
    </div>
  )
}
