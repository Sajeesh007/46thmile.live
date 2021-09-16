import { useEffect } from "react"
import { usePodcast } from "../../store/Context"
import { accessToken, events } from "../../utils/helper"
import SmallCard from "../../components/Cards/SmallCard";


export default function Programs() {

  const {programsData,setProgramsData} = usePodcast()

  useEffect(() => { 
    if(programsData === null){
      fetchPrograms ()
    }
  }, [])

  const fetchPrograms = async ()=> {
    const masterRef = await accessToken()
    const programsDetails = await events(masterRef,'desc')
    setProgramsData(programsDetails.result)
  }

  return (
    <div>
      <div className='flex flex-col space-y-2 items-center justify-center pt-2 pb-36 min-h-screen' >
        { programsData?.map((items)=>(
          <SmallCard isNotHome={true} isPodcast={false} key={items?.data?.details[1].text} title={items?.data?.title[0]?.text} artist={items?.data?.details[0].text} 
          image={items?.data?.image?.sub?.url} alt={items?.data?.image?.sub?.alt} uid={items?.uid} link={'/programs'}/>
        ))}
      </div> 
    </div>
  )
}
