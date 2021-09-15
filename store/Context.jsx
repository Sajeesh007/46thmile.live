import React, { createContext, useState, useContext, useRef } from 'react';
import { IoPlaySharp} from 'react-icons/io5'

const ControlsContext = createContext()
const PodcastContext = createContext()
const SliderContext = createContext()
const OtherContext = createContext()

export function usePodcast(){
  return useContext(PodcastContext)
}

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

  const [podcastData, setPodcastData] = useState(null)
  const [event, setEventData] = useState(null)

  const [miniIcon, setMiniIcon] = useState(<IoPlaySharp className='icon-music-control text-3xl'/>)
  const [fullIcon, setFullIcon] = useState(<IoPlaySharp className='icon-music-control text-4xl pl-1'/>)
  const [play,setPlay] = useState(false)

  const audioRef = useRef()

  const [active,setActive] = useState(2)

  const [showSideMenu, setShowSideMenu] = useState(false)
  const [showMusicPlayer,setShowMusicPlayer] = useState(false)

  return (
    <>
      <PodcastContext.Provider value={{
        podcastData, setPodcastData,
        event, setEventData,
      }}>
        <ControlsContext.Provider value={{
          miniIcon, setMiniIcon,
          fullIcon, setFullIcon,
          play,setPlay,
          audioRef,
        }}>

          <SliderContext.Provider value={{
            active,setActive,

          }}> 
            <OtherContext.Provider value={{
              showSideMenu, setShowSideMenu,
              showMusicPlayer,setShowMusicPlayer,

            }}>
            {children}
            </OtherContext.Provider>
          </SliderContext.Provider>
        </ControlsContext.Provider>
      </PodcastContext.Provider>
    </>
  )
}

