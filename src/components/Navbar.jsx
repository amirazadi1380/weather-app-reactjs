import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function Navbar() {
    const [showNav,setShowNav] = useState(false)
  return (
    <nav className='flex w-screen justify-between p-5 items-center relative transition-all duration-700'>
        <h1>
            <img src="logoimg.png" alt="logo" className=' w-16' />
        </h1>

       {showNav ? <FontAwesomeIcon onClick={()=>setShowNav(!showNav)} icon={faClose}  className='text-4xl cursor-pointer'  /> : <FontAwesomeIcon onClick={()=>setShowNav(!showNav)} icon={faBars} className='text-4xl cursor-pointer'/>}
        {
            showNav &&    
     <ul className='text-lg z-20 bg-blue-600 w-screen text-center mt-10 rounded-3xl absolute left-1/2 -translate-x-1/2 top-1/2 transition-all duration-700 '>
        <li className='my-10 text-2xl font-serif'>
            <a href="#">Home</a>
        </li>
        <li className='my-10 text-2xl font-serif'>
            <a href="#">About</a>
        </li>
        <li className='my-10 text-2xl font-serif'>
            <a href="#">Contact</a>
        </li>
    </ul>
        }

    </nav>
  )
}
