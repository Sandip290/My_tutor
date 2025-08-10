import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Navitems from './Navitems'

const Navbar = () => {

  
  return (
    <nav className='navbar '>
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={40}
            height={40}
          />
        </div>
      </Link>
      <div className='flex items-center gap-8'>
        <Navitems />
        <p>sign in</p>
      </div>
    </nav>
  )
}

export default Navbar