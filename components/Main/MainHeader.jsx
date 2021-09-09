import Logo from '../../public/logo.png'


export default function MainHeader() {
  return (
    <div className='w-screen h-48 tracking-tighter flex flex-col justify-start items-center mb-4' >
      <div className='mt-1 rounded-full bg-white'>
        <img className='h-24 w-24' src={Logo.src} alt="logo" />
      </div>
      <div className='text-white flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-merienda '>46thmile.live</h1>
        <div className='flex items-center space-x-8 mt-0.5'>
          <div className='line'/>
          <h1 className='text-lg'>X</h1>
          <div className='line'/>
        </div>
        <h3 className='font-merienda uppercase text-xs font-bold'>കേറിയങ് നോക് കേട്ടിങ് പോര്</h3>
      </div>
    </div>
  )
}
