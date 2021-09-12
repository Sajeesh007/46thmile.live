import Link from 'next/link'

export default function SideMenuItems({icon,name,path}) {
  return (
    <>
    <Link href={path}>
      <a >
        <div className='flex items-center text-xl space-x-2'>
          {icon}
          <h2>{name}</h2>
        </div> 
      </a>
    </Link>
      
    </>
  )
}
