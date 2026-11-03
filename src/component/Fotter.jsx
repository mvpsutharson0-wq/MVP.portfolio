import React from 'react'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'

function Fotter() {
  return (

    <div>

      <hr className=' text-zinc-700' />
      <div className='bg-black ps-3 sm:ps-5 md:ps-3 lg:ps-3'>

        <div className='pt-10 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 md:p-6 sm:p-6 lg:p-6 p-1 container-fulid '>
          <div className='lg:mt-8 sm:mt-8 md:mt-8 '>
            <h1 className='font-bold text-zinc-100 font-serif text-3xl sm:text-5xl md:text-5xl lg:text-5xl '>SUTHARSON.</h1>
            <p className='mt-5 font-serif text-zinc-500 text-md font-bold'>PYTHON FULL STACK DEVELOPER</p>
          </div>
          <div className=' text-center  sm:text-center md:text-center  lg:text-center mt-5 lg:mt-8 sm:mt-8 md:mt-8 container-fulid overflow-hidden '>
            <div>
           <Link to='/'>
           <span className='text-xs sm:text-sm md:text-sm lg:text-sm font-serif text-zinc-500   font-bold hover:text-zinc-300 hover:underline decoration-zinc-300'>HOME</span>
           </Link> 
           <Link to='/about'>
           <span className='text-xs sm:text-sm md:text-sm lg:text-sm ms-6 sm:ms-6 lg:ms-6 md:ms-6 font-serif text-zinc-500 hover:text-zinc-300 font-bold hover:underline decoration-zinc-300'>ABOUT</span>
           </Link>
           <Link to='/journey'>
           <span className='text-xs sm:text-sm md:text-sm lg:text-sm ms-6 sm:ms-6 lg:ms-6  md:ms-6 font-serif text-zinc-500 hover:text-zinc-300  font-bold hover:underline decoration-zinc-300'>JOURNEY</span>
           </Link>
            </div>

           
            <div className='lg:mt-5 md:mt-5 sm:mt-5 mt-3'>
              <Link to='/education'>
              <span className=' text-xs sm:text-sm md:text-sm lg:text-sm  font-serif text-zinc-500 hover:text-zinc-300 hover:underline decoration-zinc-300 font-bold'>EDUCATION</span>
              </Link>
               <Link to='/skills'>
              <span className='text-xs sm:text-sm md:text-sm lg:text-sm ms-6 sm:ms-6 lg:ms-6 md:ms-6 font-serif text-zinc-500 hover:text-zinc-300 hover:underline decoration-zinc-300 font-bold'>SKILLS</span>
              </Link>
              <Link to='/project'>
              <span className='text-xs sm:text-sm md:text-sm lg:text-sm  ms-6 sm:ms-6 lg:ms-6 md:ms-6 text-zinc-500 hover:text-zinc-300 font-bold hover:underline decoration-zinc-300'>PROJECTS</span>
              </Link>
             


            </div>
            <div  className='lg:mt-5 md:mt-5 sm:mt-5 mt-3'>
             
              <Link to='/Resume.pdf'>
              <span className='text-xs sm:text-sm md:text-sm lg:text-sm  font-serif text-zinc-500 hover:text-zinc-300 font-bold'>RESUME</span>
              </Link>
              <Link to='/contact'>
              <span className=' ms-6 sm:ms-6 lg:ms-6 md:ms-6 text-xs sm:text-sm md:text-sm lg:text-sm font-serif text-zinc-500 hover:text-zinc-300 hover:underline decoration-zinc-300 font-bold'>CONTACT</span>
              </Link>
            </div>



          </div>
          <div className='  lg:text-center sm:text-center md:text-center text-center  mt-7 md:mt-10 lg:mt-10 sm:mt-10   '>
            <h1 className=' text-zinc-500 text-2xl sm:text-3xl md:text-3xl lg:text-3xl  font-bold font-serif lg:text-center sm:text-center md:text-center text-center'>TRAIN.BUILD.</h1>
            <h1 className='text-zinc-500 mt-1 sm:mt-5 md:mt-5 lg:mt-5 text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold font-serif lg:text-center sm:text-center md:text-center text-center'>REPEAT.</h1>
          </div>
        </div>
        <div className=''>
          <hr className='mt-5 sm:mt-10 md:mt-10 lg:mt-10 sm:ms-10 ms:ms-10 lg:ms-10 ms-0 text-zinc-700' />

        </div>
        <div className=' grid grid-cols-2 mt-5 md:grid-cols-2 sm:grid-cols-2'>
          <div>

            <p className='text-zinc-500 text-xs sm:text-sm md:text-sm lg:text-sm font-serif font-bold ms-1 sm:ms-10 md:ms-10 lg:ms-10 mb-5'>@ 2026 SUTHARSON. ALL RIGHTS RESERVED</p>
          </div>

          <div>
            <p className='text-zinc-500 text-xs sm:text-sm md:text-sm lg:text-sm font-serif font-bold text-end me-10 mb-5 '>ATHLETE . DEVELOPER</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Fotter