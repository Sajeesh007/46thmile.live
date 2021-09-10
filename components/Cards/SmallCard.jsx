import Image from 'next/image'
import demo from '../../public/demo.jpg'

export default function SmallCard() {
  return (
    <div>
      <div className='relative'>
        <Image src={demo.src} className='rounded-2xl' width={100} height={100}/>
      </div>
      <div>
        <h2 className='text-sm font-merienda'>ft. Shambu</h2> 
        <h3 className='text-xs '>Celebrity.Live</h3>
      </div>
    </div>
  )
}
