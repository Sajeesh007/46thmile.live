import { useControls } from "../../store/Context"

export default function AudioSource({ handleDuration,handleCurrentTime }) {

  const {audioRef} = useControls()

  const track ='https://p.scdn.co/mp3-preview/7507f6bb39f21c12c9d0f77da85d375db9fd2f81'

  return (
    <div>
      <audio
        ref={audioRef}
        onLoadedMetadata={(e) => handleDuration(e.target.duration)}
        onTimeUpdate={(e) => handleCurrentTime(e.target.currentTime)}
      >
        <source src={track} />
      </audio>
    </div>
  )
}
