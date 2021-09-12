import SmallCard from "../Cards/SmallCard";
import Link from 'next/link'

export default function Explore({isHome,title}) {
  return (
    <div className='flex flex-col text-white py-2'>
      <div className='flex justify-between items-center px-3 pb-1'>
        <h1 className='text-lg' >{title}</h1>
        {isHome && <Link href='/podcasts'><a><h3 className='text-xs text-gray-400'>See All</h3></a></Link>}
      </div>
      <div className='flex px-3 space-x-4 overflow-x-auto w-screen' >
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
      </div>
    </div>
  )
}
