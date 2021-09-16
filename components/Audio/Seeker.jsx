import { useEffect, useState } from "react";
import { useControls } from "../../store/Context";

export default function Seeker({handleInputChange,}) {

  const {duration,currentTime} = useControls()

  const [percentage, setPercentage] = useState(0)

  const handleChange = (e) => {
    handleInputChange(parseFloat(e.target.value));
  }
  
  useEffect(() => {
    setPercentage(((currentTime - 0) / (duration - 0) * 100) *2.5)
  }, [currentTime])


  function convertTime(time) {
    let minutes = Math.floor(((time % 3600) / 60));
    let seconds = Math.floor(time % 60)
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return isNaN(time) ? '0:00' : `${minutes}:${seconds}`;
  }

  
  return (
    <div>

      <div className='flex w-64'>
        <input max={duration} min={0} onChange={handleChange} step="0.01" type="range" value={currentTime}
          className='slider h-1 marker:' style={{
            boxShadow :` ${percentage}px 0 0px #ffd105 inset`
          }}/>
      </div>
      
      <div className='flex justify-between'>
        <h5>{convertTime(currentTime)}</h5>
        <h5>{convertTime(duration)}</h5>
      </div>
    </div>
  )
}
