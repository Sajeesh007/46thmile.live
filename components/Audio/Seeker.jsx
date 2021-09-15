import { useEffect, useState } from "react";

export default function Seeker({max,min,handleInputChange,value}) {

  const [percentage, setPercentage] = useState(0)

  const handleChange = (e) => {
    handleInputChange(parseFloat(e.target.value));
    
  }
  
  useEffect(() => {
    setPercentage(((value - min) / (max - min) * 100)*2.5)
  }, [value])


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
        <input max={max} min={min} onChange={handleChange} step="0.01" type="range" value={value}
          className='slider h-1 marker:' style={{
            boxShadow :` ${percentage}px 0 0px #ffd105 inset`
          }}/>
      </div>
      
      <div className='flex justify-between'>
        <h5>{convertTime(value)}</h5>
        <h5>{convertTime(max)}</h5>
      </div>
    </div>
  )
}
