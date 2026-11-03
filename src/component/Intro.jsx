import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'

import AOS from 'aos';
import "aos/dist/aos.css"
function Intro() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 90,
    });
  }, [])
  return (
    <div className='bg-zinc-950 '>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10 px-3   '>
        <div className='md:pt-7 sm:pt-7 lg:pt-10 sm:ms-5 md:ms-5 lg:ms-5 ms-2 pt-7 ' >

          <h1 data-aos="zoom-in-up" className='font-bold text-zinc-500   text-sm sm:text-xl md:text-xl lg:text-xl italic  ms-3'>H E L L O .  I ' M</h1>
          <h1 data-aos="zoom-in-up" className='text-white  font-serif mt-3 font-bold text-4xl  sm:text-7xl md:text-7xl lg:text-7xl'>SUTHARSON </h1>

          <span data-aos="zoom-in-up" className='font-bold text-zinc-500 text-xs sm:text-sm md:text-sm lg:text-sm mt-4 font-serif'>I AM A</span>
          <span data-aos="zoom-in-up" className='font-bold text-zinc-600 text-xl sm:text-2xl md:text-2xl lg:text-2xl md:text-3xl sm:text-3xl lg:text-3xl  ms-3 inline font-serif'>PYTHON DEVELOPER</span>

          <p data-aos="zoom-in-up" className='text-zinc-200 text-xl sm:text-2xl md:text-2xl lg:text-2xl mt-8 font-serif'>"I bring the same energy to code that i bring <br /> to the court."</p>
          <p data-aos="zoom-in-up" className='text-zinc-500 text-sm sm:text-lg md:text-lg lg:text-lg mt-5 font-serif'>I'm currently pursuing Python Full Stack Development at JClick <br /> Solutions, building my skills across frontend, databases <br /> and modern web technologiesl</p>
<Link to='project'>
          <button data-aos="zoom-in-up" className='text-sm sm:text-md md:text-md lg:text-md  hover:cursor-pointer font-bold text-white border-2 px-5 py-3 mt-5 border-zinc-400 hover:bg-white hover:text-zinc-700 font-serif md:ms-1 sm:ms-0' >EXPLORE MY WORK ➝</button>
</Link>
          <span>
            <button data-aos="zoom-in-up" className='text-sm sm:text-md md:text-md lg:text-md  hover:cursor-pointer font-bold text-white border-2 px-5 py-3 mt-5 border-zinc-400  hover:bg-white hover:text-zinc-700 font-serif md:ms-1 sm:ms-5 lg:ms-5' >
              <a href="Resume.pdf" download='Resume.pdf'>DOWNLOAD RESUME ↓</a> </button>
          </span>
        </div>
        <div >
          <section data-aos="zoom-in-up" className='flex justify-center mt-10 '>
            <div className='  md:pt-35 lg:pt-20 sm:pt-1'>
              <img data-aos="zoom-in-up" src="./Profile.png" alt="" className='rounded-full' />
            </div>
          </section>
        </div>

      </div>
      <hr className='mt-15 text-zinc-400' />
      <div className='pt-20 pb-20 ms:ps-10 md:ps-10 lg:ps-10 ps-4 grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1  bg-black'>
        <h1 data-aos="zoom-in-up" className='text-zinc-500 font-bold font-serif  text-xs sm:text-md md:text-md lg:text-md'>─────── PERSONAL PHILOSOPHY</h1>
        <div>

          <h1 data-aos="zoom-in-up" className="mt-4 overflow-hidden font-serif  font-bold   text-zinc-200 sm:text-6xl md:text-6xl lg:text-6xl text-4xl text-center sm:text-center md:text-center lg:text-center"
          >
            DISCIPLINE IS MY <br /> SUPERPOWER.
          </h1>
        </div>


      </div>
      <hr className=' text-zinc-700' />
      <div className='pt-20 grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 text-center bg-black pb-15' >
        <h1 data-aos="zoom-in-up" className='font-serif text-white font-bold text-5xl sm:text-6xl md:text-6xl lg:text-6xl mt-4'>READY FOR THE <br />
          NEXT POINT ?
        </h1>
        <p data-aos="zoom-in-up" className='font-serif text-zinc-500  text-md sm:text-lg md:text-lg lg:text-lg mt-5 sm:mt-10 md:mt-10 lg:mt-10 font-bold'>LET'S BUILD SOMETHING WORTH REMEMBERING</p>
        <div className='mt-7'>
          <Link to='/about'>
            <button data-aos="zoom-in-up" className='text-sm sm:text-md md:text-md lg:text-md hover:cursor-pointer font-serif border-2 border-zinc-400 px-8 py-2 text-white hover:bg-white hover:border-2 hover:text-zinc-700   '>ABOUT ME ➝</button>
          </Link>


        </div>

      </div>

    </div>

  )
}


export default Intro