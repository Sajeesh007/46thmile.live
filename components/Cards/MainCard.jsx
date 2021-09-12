import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useSlider } from '../../store/Context'

export default function MainCard({source}) {

  const {setActive,active} = useSlider()

  const [touchStart, setTouchStart] = useState('')

  const style = {
    boxShadow : '0rem 0rem 1rem #000',
  }

  const handleTouch =(e)=>{
    if(e.type === 'touchstart')
      setTouchStart(e.changedTouches[0].clientX)
    else
      touchStart > e.changedTouches[0].clientX ? active > 2 ? setActive((prev)=>prev - 2) : setActive((prev)=>prev + 1) : active < 2 ? setActive((prev)=>prev + 2) : setActive((prev)=>prev - 1)
  }
  
  return (
    <div className='flex flex-col justify-center items-center mt-4 rounded-3xl' style={style} 
      onTouchStart={handleTouch} onTouchEnd={handleTouch}>
      <Link href='/'>
        <a className='flex justify-center items-center' >
            <Image src={source} className='rounded-3xl' width={285} height={300} />
          </a>
      </Link>
    </div>
  )
}
