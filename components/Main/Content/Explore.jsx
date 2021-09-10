import SmallCard from "../../Cards/SmallCard";

export default function Explore() {
  return (
    <div className='flex flex-col text-white mx-6 mb-20'>
      <div className='flex justify-between items-center px-1 pb-1'>
        <h1 className='text-base' >Podcasts</h1>
        <h3 className='text-xs text-gray-400'>See All</h3>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/>
      </div>
    </div>
  )
}
