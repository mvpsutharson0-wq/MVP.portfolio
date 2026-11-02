import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import AOS from 'aos';
import "aos/dist/aos.css"
function Education() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, [])
    return (
        <div className='bg-zinc-950'>
            <div className='grid grid-cols-1 ms-5 sm:ms-10 md:ms-10 lg:ms-10 pt-0 '>
                <div data-aos="zoom-in-up" className='mt-15 sm:mt-20 md:mt-20 lg:mt-20 '>
                    <span className='text-zinc-600 font-bold text-2xl sm:text-4xl md:text-4xl lg:text-4xl'>04</span>
                    <span className='text-zinc-200 ms-2 sm:ms-5 md:ms-5 lg:ms-5  font-serif text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-bold'>EDUCATION</span>
                </div>
                <div data-aos="zoom-in-up" className='bg-black mt-10 sm:mt-15 md:mt-15 lg:mt-15 border border-zinc-600 me-5 sm:me-10 md:me-10 lg:me-10'>
                    <div className='mt-15 ms-7 md:ms-15 sm:ms-15 lg:ms-15 mb-15'>
                        <h1 className='text-zinc-500 text-serif text-xs sm:text-sm md:text-sm lg:text-sm'>___BACHRLOR'S DEGREE</h1>
                        <h1 className='mt-5 text-2xl text-zinc-200 font-serif font-bold'>B.SC COMPUTER SCIENCE</h1>
                        <h1 className='text-zinc-500 font-bold font-serif text-sm sm:text-md md:text-md lg:text-md'>JEROMS COLLEGE</h1>
                        <p className='text-xs sm:text-md md:text-md lg:text-md text-zinc-500 font-serif mt-5'>Studied computer science fundamentals and developed an interest in software <br />
                            development and web technoiogies.</p>
                    </div>

                </div>
                <div data-aos="zoom-in-up" className='bg-black mt-15 border border-zinc-600 me-5 sm:me-10 md:me-10 lg:me-10'>
                    <div className='mt-15 ms-7 md:ms-15 sm:ms-15 lg:ms-15 mb-15'>
                        <h1 className='text-zinc-500 text-serif text-xs sm:text-sm md:text-sm lg:text-sm'>___PROFESSIONAL TRAINING</h1>
                        <h1 className='mt-5 text-2xl text-zinc-200 font-serif font-bold'>PYTHON FULL STACK DEVELOPMENT</h1>
                        <div>

                            <span className='text-zinc-500 font-bold font-serif text-l-md'>JCLICK SOLUTIONS -</span><span className='text-zinc-200 ms-1 text-sm sm:text-md md:text-md lg:text-md font-bold font-serif'>CURRENTLY PURSUING</span>
                        </div>
                        <p className='text-zinc-500 font-serif mt-5 text-xs sm:text-md md:text-md lg:text-md'>Intensive hands-on training across Python, HTML, CSS, JavaScript, <br />
                            Bootstrap, Django, MySQL, REST APIs, Git and GitHub.<br />
                        </p>
                        <button className='mt-8 font-serif border border-zinc-400 px-8 py-2 text-white  hover:cursor-pointer hover:bg-white hover:border-2 hover:text-zinc-700 text-xs sm:text-md md:text-md lg:text-md  '>VIEW TRAINING ➝</button>

                    </div>

                </div>
            </div>
            <div className='bg-black mt-20 grid grid-cols-1'>
                <div className='text-center mb-20'>
                    <h1 data-aos="zoom-in-up" className='text-zinc-200 text-5xl sm:text-7xl md:text-7xl lg:text-7xl  font-serif font-bold pt-25'>LEARNING NERVER <br />
                        LEAVES THE COURT.</h1>
                   <Link to='/skills'>
                   <button data-aos="zoom-in-up" className='mt-10 font-serif border border-zinc-400 px-8 py-2 text-white hover:bg-white   text-sm sm:text-md md:text-md lg:text-md hover:cursor-pointer hover:text-zinc-700   '>SEE MY SKILLS ➝</button>
                   </Link> 

                </div>
            </div>
          
        </div>
    )
}

export default Education