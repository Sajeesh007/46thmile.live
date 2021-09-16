import { useRouter } from 'next/dist/client/router'

import { IoMdShare} from 'react-icons/io'
import { MdAdd } from 'react-icons/md'
import { useControls } from '../../store/Context'

export default function Controls({date,length,title,content}) {
  
  const { play,setPlay,miniIcon} = useControls()

  const router = useRouter()
 
  const handleClick = ()=> {
    setPlay(!play)
  }

  const handleClickShare = async (e)=>{
    const shareData = {
      title: title,
      text: content,
      url: `https://46thmile-live.vercel.app${router.asPath}`
    }
    try {
      await navigator.share(shareData)
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className='flex justify-between text-white px-8 pb-4 space-x-2 pt-2'>
      <div className='flex space-x-2'>
        <div className='flex justify-center items-center rounded-full bg-yellow-400 h-12 w-12' onClick={handleClick}>
          {miniIcon}
        </div>
        <div className='flex flex-col text-sm justify-center items-start'>
          <p>{date}</p> 
          <p>{length} mins</p>
        </div>
      </div>
      
      <div className='flex justify-center items-center space-x-4'>
        <div onClick={handleClickShare}>
          <IoMdShare className='text-2xl'/>
        </div>
        <MdAdd className='text-3xl'/>
      </div>
    </div>
  )
}
