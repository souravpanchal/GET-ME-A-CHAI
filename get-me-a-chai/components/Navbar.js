/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(true)

  return (
    <nav className='bg-gray-900 text-white flex justify-between px-4 items-center  md:h-16 flex-col md:flex-row'>
    
      <Link className="logo font-bold text-lg flex justify-center items-center gap-4" href={"/"}>
        <img className='invertImg' src="/coffee.gif" width={28} alt="" />
        <span className='text-xl md:text-base my-3 md:my-0'>Get Me a Chai!</span>
        </Link>
     
      {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign up</li>
        <li>Login</li>
        </ul>   */}

      <div className='relative flex flex-col md:block  gap-4 '>
        {session && <>
          <button onClick={() => setShowdropdown(!showdropdown)} onBlur={()=> {setTimeout(() => {
             setShowdropdown(false)
          }, 100);}}      id="dropdownDelayButton" mx-4 data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>

          <div id="dropdownDelay" className={`z-10 ${showdropdown ? "" : "hidden"} absolute left-[125px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              <li>
                <Link onClick={() => signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div></>
        }

        {session && <button className='px-6 py-2 bg-blue-500 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400' onClick={() => { signOut() }} >Logout</button>}
        {!session &&
          <Link href={"/login"}>
            <button className='px-6 py-2 bg-blue-500 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400' >Login</button>
          </Link>}
      </div>
    </nav>
  )
}

export default Navbar