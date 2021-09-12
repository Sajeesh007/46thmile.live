import React, { createContext, useState, useContext } from 'react';
import { IoPlaySharp} from 'react-icons/io5'

const ControlsContext = createContext()
const SliderContext = createContext()
const OtherContext = createContext()


export function useControls(){
  return useContext(ControlsContext)
}

export function useSlider(){
  return useContext(SliderContext)
}

export function useOther(){
  return useContext(OtherContext)
}

export function Context({children}) {

  const [icon, setIcon] = useState(<IoPlaySharp className='icon-music-control'/>)
  const [play,setPlay] = useState(false)

  const [active,setActive] = useState(2)

  const [showSideMenu, setShowSideMenu] = useState(false)

  return (
    <>
      <ControlsContext.Provider value={{
          icon, setIcon,
          play,setPlay,
        }}>

        <SliderContext.Provider value={{
          active,setActive,

        }}> 
        <OtherContext.Provider value={{
          showSideMenu, setShowSideMenu,
          
        }}>

          {children}
          </OtherContext.Provider>
        </SliderContext.Provider>

      </ControlsContext.Provider>
    </>
  )
}

