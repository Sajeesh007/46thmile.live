
export default function Heading({title,artist}) {
  return (
    <div className='text-white px-8 flex flex-col'>
      <h1 className='text-2xl uppercase font-medium text-center'>{title}</h1>
      <h3 className='text-lg uppercase font-medium text-center text-gray-500'>{artist}</h3>
    </div>
  )
}
