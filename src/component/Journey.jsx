import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'

import AOS from 'aos';
import "aos/dist/aos.css"
function Journey() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, [])
  return (
    <div className='bg-zinc-950'>
      <div className='grid grid-cols-1 ms-5 sm:ms-10 md:ms-10 lg:ms-10 pt-20'>
        <h1 data-aos="zoom-in-up" className='text-xs sm:text-sm md:text-sm lg:text-sm text-zinc-500 font-serif font-bold'>____ FROM THE COURT TO THE CODING - I NEVER STOP MOVING </h1>
      </div>
      <div className='grid grid-cols-1 ms-2 sm:ms-10 md:ms-10 lg:ms-10 pt-10'>
        <div>

          <span data-aos="zoom-in-up" className='text-zinc-600 font-bold   text-2xl sm:text-4xl md:text-4xl lg:text-4xl'>03</span>
          <span data-aos="zoom-in-up" className='text-zinc-200 ms-2 sm:ms-5 md:ms-5 lg:ms-5  font-serif  text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-bold'>MY JOURNEY</span>
        </div>
      </div>
      <div className='grid grid-cols-2 '>
        <div className='mt-20 ms-5 ms:ms-20 md:ms-20 lg:ms-40'>
          <h1 data-aos="zoom-in-up" className='text-zinc-500 font-serif text-sm sm:text-md lg:text-md md:text-md'>CHAPTER 01</h1>
          <h1 data-aos="zoom-in-up" className='text-lg sm:text-2xl md:text-2xl lg:text-2xl text-zinc-200 font-serif font-bold'>B.SC COMPUTER SCIENCE</h1>
          <button data-aos="zoom-in-up" className='mt-3 font-serif border border-zinc-400 px-4 py-1 text-xs sm:text-md md:text-md lg:text-md text-white hover:bg-white hover: hover:text-zinc-700'>JEROMS COLLEGE</button>
          <p data-aos="zoom-in-up" className='text-sm sm:text-md md:text-md lg:text-md text-zinc-500 mt-3'>Built my foundation in computer science and tehnology __ <br />
            programming systems and the logic that powers everything <br />
            digital.
          </p>
        </div>
        <div className='mt-70 ms-5 ms:ms-20 md:ms-20 lg:ms-30 '>
          <h1 data-aos="zoom-in-up" className='text-zinc-500 font-serif text-sm sm:text-md lg:text-md md:text-md'>CHAPTER 02</h1>
          <h1 data-aos="zoom-in-up" className='text-lg sm:text-2xl md:text-2xl lg:text-2xl text-zinc-200 font-serif font-bold overflow-hidden'>DISCOVRING DEVELOPMENT</h1>
          <p data-aos="zoom-in-up" className='text-sm sm:text-md md:text-md lg:text-md text-zinc-500 mt-1'>Started exploring web development, programming and<br />
            building wesites__the moment curiosity turned into<br />
            direction.
          </p>
        </div>
        <div className='mt-15 ms-5 sm:ms-20 md:ms-20 lg:ms-40 '>
          <h1 data-aos="zoom-in-up" className='text-zinc-500 font-serif text-sm sm:text-md lg:text-md md:text-md'>CHAPTER 03</h1>
          <h1 data-aos="zoom-in-up" className='text-lg sm:text-2xl md:text-2xl lg:text-2xl  text-zinc-200 font-serif font-bold'>PYTHON FULL STACK <br />DEVELOPMENT</h1>
          <button data-aos="zoom-in-up" className='mt-3 text-xs sm:text-md md:text-md lg:text-md  font-serif border border-zinc-400 px-4 py-1 text-white hover:bg-white hover: hover:text-zinc-700'>JCLICK SOLUTIONS</button>
          <p data-aos="zoom-in-up" className='text-sm sm:text-md md:text-md lg:text-md  text-zinc-500 mt-3'>Joined Jclick Solutions to pursue Python Full Stack<br />
            Development__training across frontend, backend and <br />
            databases.
          </p>
        </div>
        <div className='mt-70  ms-5 ms:ms-20 md:ms-20 lg:ms-30  '>
          <h1 data-aos="zoom-in-up" className='text-zinc-500 font-serif text-sm sm:text-md lg:text-md md:text-md'>CHAPTER 04</h1>
          <h1 data-aos="zoom-in-up" className='text-lg sm:text-2xl md:text-2xl lg:text-2xl  text-zinc-200 font-serif font-bold'>BUILDING PROJECTS</h1>
          <p data-aos="zoom-in-up" className='text-sm sm:text-md md:text-md lg:text-md  text-zinc-500 mt-1'>Started developing practical frontend and backend <br />
            applications__turining training into real, working software.<br />

          </p>
        </div>

      </div>
      <div className='grid grid-cols-1 mt-20 sm:mt-30 md:mt-30 lg:mt-30  pb-15 sm:pb-25 md:pb-25 lg:pb-25'>
        <div>
          <h1 data-aos="zoom-in-up" className='text-zinc-200 text-center font-bold text-2xl sm:text-4xl md:text-4xl lg:text-4xl'>EVERY RALLY TEACHES ME TO KEEP GOIND.</h1>
        </div>
        <div className='mt-2'>
          <h1 data-aos="zoom-in-up" className='text-zinc-200 text-center  font-bold text-2xl sm:text-4xl md:text-4xl lg:text-4xl'>EVERY PROJECT TEACHES ME TO BUILD BETTER.</h1>
        </div>
      </div>
      <hr className='text-zinc-700' />
      <div className='bg-black'>
        <div className='grid grid-cols-1'>
          <div className='  pt-20 sm:pt-30 md:pt-30  lg:pt-30  text-center'>
            <h1 data-aos="zoom-in-up" className='text-5xl sm:text-6xl md:text-6xl lg:text-6xl text-zinc-200 font-serif font-bold overflow-hidden'>THE NEXT CHAPTER <br />IS BEING WRITTEN.</h1>
          </div>
          <div className='text-center mt-8 mb-15'>
            <Link to='/education'>

              <button data-aos="zoom-in-up" className='text-sm sm:text-md md:text-md lg:text-md  font-serif border border-zinc-400 px-8 py-2  text-white hover:bg-white  hover:cursor-pointer  hover:text-zinc-700   '>SEE MY EDUCATION ➝</button>
            </Link>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Journey