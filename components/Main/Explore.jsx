import Link from 'next/link'

import SmallCard from "../Cards/SmallCard"

export default function Explore({isHome,title,data,isPodcast,link}) {

  return (
    <div className='flex flex-col text-white py-2'>
      <div className='flex justify-between items-center px-3 pb-1'>
        <h1 className='text-lg' >{title}</h1>
        {isHome && <Link href={link}><a><h3 className='text-xs text-gray-400'>See All</h3></a></Link>}
      </div>
      <div className='flex px-3 space-x-4 overflow-x-auto w-screen'>
        {data?.map((items)=>(
          <SmallCard isPodcast={isPodcast} key={items?.data?.details[1].text} title={items?.data?.title[0]?.text} artist={items?.data?.details[0].text} 
            image={items?.data?.image?.sub?.url} alt={items?.data?.image?.sub?.alt} uid={items?.uid} link={link}/>
        ))}
      </div>
    </div>
  )
}
