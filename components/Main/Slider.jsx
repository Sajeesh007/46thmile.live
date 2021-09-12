import { useEffect, useState } from 'react'
import demo from '../../public/demo.jpg'
import podcast from '../../public/podcast.jpg'
import podcast1 from '../../public/podcast1.jpg'
import { useSlider } from '../../store/Context'
import MainCard from '../Cards/MainCard'

export default function Slider() {

  const {active} = useSlider()

  const [image, setImage] = useState({first : podcast.src,second : demo.src , third: podcast1.src})


  useEffect(() => {
    switch(active){
      case 1 :  setImage({first : demo.src,second :podcast1.src  , third: podcast.src})
        break
      case 2 :  setImage({first : podcast.src,second : demo.src , third: podcast1.src})
        break
      case 3 :  setImage({first : podcast1.src,second :podcast.src  , third: demo.src})
        break
    }
  }, [active])
  
  return (
    <div>
      <div className='relative flex justify-center items-center flex-wrap mt-14 overflow-x-auto w-screen h-80'>
          <div className='z-10 absolute right-4' >
            <MainCard source={image.first} />
          </div>
          <div className='z-20 filter drop-shadow-xl'>
            <MainCard source={image.second}/>
          </div>
          <div className='z-10 absolute left-4 '>
            <MainCard source={image.third} />
          </div>
          <div className='absolute bottom-2 z-30 w-24 h-4 flex justify-around items-center'>
            <div className={`slider-round ${active === 1 && 'bg-white'}`}/>
            <div className={`slider-round ${active === 2 && 'bg-white'}`}/>
            <div className={`slider-round ${active === 3 && 'bg-white'}`}/>
      
          </div>
        </div>
    </div>
  )
}
