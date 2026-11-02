import React from 'react'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import Contact from './Contact'

function Navbar() {
    return (
<div className='mb-10'>
    


<nav class="bg-black fixed w-full z-20 top-0 start-0 border-b border-default">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
  
     
      <span className="self-center text-xl sm:text-2xl md:text-2xl lg:text-2xl text-heading text-white font-serif  font-semibold whitespace-nowrap">SUTHARSON</span>

  <div class="flex items-center md:order-2">
  <div>
    <Link to='contact'><button className='text-zinc-200 text-sm   border px-4 py-2 font-serif md:hover:text-zinc-500 hover:cursor-pointer '>LET'S TALK ➜ </button></Link>
  </div>

    <div className="relative hidden md:block ">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        
      </div>
     </div>
    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden sm:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-search" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
    </button>
  </div>
    <div className="items-center justify-between hidden  w-full md:hidden lg:flex md:w-auto md:order-1" id="navbar-search">
      
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   bg-serif md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  md:black ">
        <li>
          <Link className="block py-2 px-3 text-white font-serif text-md   hover:text-zinc-500 md:p-0 " aria-current="page" to='/'>HOME</Link>
        </li>
        <li>
          <Link className="block py-2 px-3 text-white font-serif text-md   md:hover:text-zinc-500 md:p-0 font-serif text-md " to='/about'>ABOUT</Link>
        </li>
        <li>
          <Link className="block py-2 px-3 text-white font-serif text-md  md:hover:text-zinc-500 md:p-0 font-serif text-md " to='/journey'>JOURNEY</Link>
        </li>
        <li>
          < Link className="block py-2 px-3 text-white font-serif text-md  md:hover:text-zinc-500 md:p-0" to='/education'>EDUCATION</ Link>
        </li>
        <li>
          < Link className="block py-2 px-3 text-white font-serif text-md  md:hover:text-zinc-500 md:p-0" to='/skills'>SKILLS</ Link>
        </li>
        <li>
          < Link className="block py-2 px-3 text-white font-serif text-md  md:hover:text-zinc-500 md:p-0" to='/project'>PROJECTS</ Link>
        </li>
        <li>
          < Link className="block py-2 px-3 text-white font-serif text-md   md:hover:text-zinc-500 md:p-0" to='/contact'>CONTACT</  Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


</div>
    )
}

export default Navbar