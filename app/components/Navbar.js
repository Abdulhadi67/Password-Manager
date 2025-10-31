import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className="bg-slate-500 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex gap-12 md:flex-wrap items-center justify-between p-2 mx-auto bg-slate-500">
          <Link href="https://localhost:3000" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="password logo.png" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">&lt;PASS&nbsp;<b className='text-amber-400 text-2xl'>OP/</b>&gt;</span>
          </Link>
      
          <div className="w-full flex md:w-auto" id="navbar-default">
            <ul className="mr-2 md:mr-52 font-medium flex flex-row p-2 md:p-0 mt-2 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-slate-500 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/" className="block py-2 px-3 rounded-sm md:bg-transparent md:hover:text-green-600 md:p-0 dark:text-white md:dark:text-green-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>


  )
}

export default Navbar
