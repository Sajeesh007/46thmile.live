import SmallCard from "../Cards/SmallCard";
import Link from 'next/link'

export default function Explore() {
  return (
    <div className='flex flex-col text-white mx-6 mb-20'>
      <div className='flex justify-between items-center px-1 pb-1'>
        <h1 className='text-lg' >Podcasts</h1>
        <Link href='/podcasts'><a><h3 className='text-xs text-gray-400'>See All</h3></a></Link>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
      </div>
    </div>
  )
}
