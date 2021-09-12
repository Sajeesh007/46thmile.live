import React, { createContext, useState, useContext } from 'react';
import { IoPlaySharp} from 'react-icons/io5'

const ControlsContext = createContext()
const SliderContext = createContext()

export function useControls(){
  return useContext(ControlsContext)
}

export function useSlider(){
  return useContext(SliderContext)
}

export function Context({children}) {

  const [icon, setIcon] = useState(<IoPlaySharp className='icon-music-control'/>)
  const [play,setPlay] = useState(false)

  const [active,setActive] = useState(2)

  return (
    <>
      <ControlsContext.Provider value={{
          icon, setIcon,
          play,setPlay,
        }}>

        <SliderContext.Provider value={{
          active,setActive,

        }}> 

          {children}

        </SliderContext.Provider>

      </ControlsContext.Provider>
    </>
  )
}

