import SmallCard from "../../components/Cards/SmallCard";

export default function Podcast() {
  return (
    <div>
      <div className='flex flex-col space-y-2 items-start pt-6 pb-20' >
       {
         [1,2,3,4,5,6,7].map((item)=><SmallCard podcast={true} key={item}/>)
       } 
      </div> 
    </div>
  )
}
