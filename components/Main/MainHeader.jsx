import Logo from '../../public/logo.png'


export default function MainHeader() {
  return (
    <div className='absolute w-screen h-48 tracking-tighter top-0 flex flex-col justify-start items-center' >
      <div className='mt-1 rounded-full bg-white'>
        <img className='h-16 w-16' src={Logo.src} alt="logo" />
      </div>
      <div className='text-white flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-merienda '>46thmile.live</h1>
        <h3 className='font-merienda uppercase text-xs font-bold'>കേറിയങ് നോക് കേട്ടിങ് പോര്</h3>
      </div>
    </div>
  )
}
