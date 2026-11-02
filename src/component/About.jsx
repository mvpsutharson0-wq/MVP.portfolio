import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import AOS from 'aos';
import "aos/dist/aos.css"
function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, [])
    return (
        <div className='bg-zinc-950 '>
            <div className='grid grid-cols-1 ms-3 sm:ms-10 md:ms-10 lg:ms-10 pt-20 sm:pt-20 md:pt-20 lg:pt-20'>
                <div className=''>
                    <p data-aos="zoom-in-up"  className='text-zinc-500 font-serif text-xs sm:text-sm md:text-sm lg:text-sm'>_____ ABOUT ME</p>
                </div>
                <div className=' mt-3 sm:mt-5 md:mt-5 lg:mt-5'>
                    <span data-aos="zoom-in-up" className='text-zinc-600 font-bold  text-2xl sm:text-4xl md:text-4xl lg:text-4xl'>02</span>
                    <span data-aos="zoom-in-up" className='text-zinc-200 ms-2 sm:ms-5 md:ms-5 lg:ms-5  font-serif text-3xl sm:text-6xl md:text-6xl lg:text-6xl font-bold'>WHO I AM</span>
                </div>
                <div className='mt-7 sm:mt-20 md:mt-20 lg:mt-20 ms-5 md:ms-40 sm:ms-40 lg:ms-40'>
                    <p data-aos="zoom-in-up" className='text-zinc-200 text-lg font-bold  font-serif'>Hi,I'm SUTHARSON.</p>
                    <br />
                    <p data-aos="zoom-in-up" className='text-zinc-500 font-serif text-sm sm:text-md md:text-md lg:text-md'>I'm a Computer Science graduate from Jeroms Collage and courrently pursuing Python Full Stack Development <br /> at J Click Solutions.</p>
                    <br />
                    <p data-aos="zoom-in-up" className='text-zinc-500 font-serif  text-sm sm:text-md md:text-md lg:text-md'>I'm passionate about technology.web development and continuous learining. Outside the world of code, I'm an <br /> energetice volleyball player. Sports have taught me discipline, teamwork, communication,resilience and the <br /> importance of staying focused even when the game gets difficult.  </p>
                    <br />
                    <p data-aos="zoom-in-up" className='text-zinc-500 font-serif  text-sm sm:text-md md:text-md lg:text-md'>I carry those lessons into development.</p>
                    <br />
                    <br />
                    <p data-aos="zoom-in-up" className='text-zinc-300 font-serif text-lg sm:text-xl md:text-xl lg:text-xl'>When a bug doesn't work, I don't quit. I <br /> debug</p>
                    <br />

                    <p data-aos="zoom-in-up" className='text-zinc-300 font-serif text-lg sm:text-xl md:text-xl lg:text-xl'>When a project gets difficult, I don't dtep <br /> back. I learn  </p>
                    <br />
                    <p data-aos="zoom-in-up" className='text-zinc-300 font-serif text-lg sm:text-xl md:text-xl lg:text-xl'>And when the goal feels far away, I keep <br />moving </p>
                </div>

            </div>
            <div className='grid grid-cols-1 ms-3 sm:ms-10 md:ms-10 lg:ms-10'>
                <div  className='mt-10 sm:mt-20 md:mt-20 lg:mt-20'>

                    <span data-aos="zoom-in-up" className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-zinc-600 font-bold '>03</span>
                    <span data-aos="zoom-in-up" className='text-3xl sm:text-6xl md:text-6xl lg:text-6xl text-zinc-200 font-bold font-serif ms-2 sm:ms-5 md:ms-5 lg:ms-5 '>WHAT I BRING</span>
                </div>
            </div>
            <div className='grid grid-cols-5  ms-2 sm:ms-10 md:ms-10 lg:ms-10 text-center gap-1 sm:gap-5 md:gap-5 lg:gap-5 mt-10 sm:mt-15 md:mt-15 lg:mt-15 me-2 sm:me-5 md:me-5 lg:me-5'>
                <div data-aos="zoom-in-up" className=''>
                    <p className='bg-black text-zinc-200  font-bold fonst-serif text-xs sm:text-lg md:text-xl lg:text-2xl  sm:py-10 md:py-10 lg:py-15 py-8  hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>ENERGETIC</p>
                </div>
                <div data-aos="zoom-in-up" className=''>
                    <p className='bg-black text-zinc-200  font-bold fonst-serif text-xs sm:text-lg md:text-xl lg:text-2xl  sm:py-10 md:py-10 lg:py-15 py-8  hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950' >DISCIPLIND</p>
                </div>
                <div data-aos="zoom-in-up" className=''>
                    <p className='bg-black text-zinc-200  font-bold fonst-serif text-xs sm:text-lg md:text-xl lg:text-2xl sm:py-6 md:py-6 md:pb-7 lg:py-11 py-6  hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950' >TEAM <br /> PLAYER</p>
                </div>
                <div data-aos="zoom-in-up" className=''>
                    <p className='bg-black text-zinc-200   font-bold fonst-serif text-xs sm:text-lg md:text-xl lg:text-2xl sm:py-6 md:py-6 md:pb-7 lg:py-11 py-6  hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>QUCIK <br /> LEARNER</p>
                </div>
                <div data-aos="zoom-in-up" className=''>
                    <p className='bg-black text-zinc-200  font-bold fonst-serif text-xs sm:text-lg md:text-xl lg:text-2xl sm:py-6 md:py-6 md:pb-7 lg:py-11 py-6  hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>PROBLEM <br /> SOLVER</p>
                </div>
                <div data-aos="zoom-in-up">
                    <p className='bg-black text-zinc-200  font-bold fonst-serif text-xs sm:text-lg md:text-xl lg:text-2xl sm:py-6 md:py-6 md:pb-7 lg:py-11 py-6  hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>CREATIVE <br />
                     THINKKER</p>

                </div>
                <div data-aos="zoom-in-up">
                    <p className='bg-black text-zinc-200  font-bold fonst-serif text-xs sm:text-lg md:text-xl lg:text-2xl sm:py-10 md:py-10 lg:py-15 py-8  hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>ADAPTABLE</p>

                </div>
                <div data-aos="zoom-in-up">
                    <p className='bg-black text-zinc-200  font-bold fonst-serif text-xs sm:text-lg md:text-xl lg:text-2xl sm:py-10 md:py-10 lg:py-15 py-8  hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>PEASISTEST</p>

                </div>

            </div>
            <div className='grid grid-cols-1 mt-10 sm:mt-15 md:mt-15 lg:mt-15 ms-2 sm:ms-10 md:ms-10 lg:ms-10'>
                <div>
                    <span data-aos="zoom-in-up" className=' text-2xl sm:text-4xl md:text-4xl lg:text-4xl text-zinc-600 font-bold'>04</span>
                    <span data-aos="zoom-in-up" className='text-3xl sm:text-6xl md:text-6xl lg:text-6xl text-zinc-200 font-bold ms-5'>SET. SPIKE. CODE.</span>
                </div>
            </div>
            <div className='border border-2 rounded-b-md rounded-t-md   border-zinc-300 ms-4 sm:ms-10 md:ms-10 lg:ms-10 me-4 sm:me-10 md:me-10 lg:me-10  mt-15'>
                <div className='grid grid-cols-1'>
                    <div  className='flex justify-center sm:justify-center md:justify-center lg:justify-center bg-zinc-100'>
                        <h1 className='text-black py-3 sm:p-5  md:p-5 lg:p-5  bg-zinc-100 font-serif font-bold  text-md sm:text-2xl md:text-2xl lg:text-2xl me-5 sm:me-5 md:me-5 lg:me-5'>VOLLEYBALL │</h1>
                        <h1 className='text-black py-3 sm:p-5  md:p-5 lg:p-5 bg-zinc-100 font-serif font-bold text-md sm:text-2xl md:text-2xl lg:text-2xl ms-5 sm:ms-5 md:ms-5 lg:ms-5'>│ DEVELOPMENT </h1>
                    </div>
                    <div data-aos="zoom-in-up" className='bg-zinc-950 text-center'>
                        <h1 className='text-zinc-200 font-bold fond-serif text-xs sm:text-2xl md:text-2xl lg:text-2xl p-5 ms-11 sm:ms-25 md:ms-25 lg:ms-25'>SERVE <span className='text-zinc-400 text-xs sm:text-lg md:text-lg lg:text-lg px-4 font-normal'>│ STARTS │</span>START A PROJECT</h1>
                    </div>
                    <hr className='text-zinc-800' />
                    <div  data-aos="zoom-in-up" className='bg-zinc-950 text-center'>
                        <h1 className='text-zinc-200 font-bold fond-serif  text-xs sm:text-2xl md:text-2xl lg:text-2xl p-5 ms-12 sm:ms-25 md:ms-25 lg:ms-25'>SET <span className='text-zinc-400 text-xs sm:text-lg md:text-lg lg:text-lg px-2 sm:px-4 md:px-4 lg:px-4 font-normal'>│ BECOMES │</span>ARCHITECTURE</h1>
                    </div>
                    <hr className='text-zinc-800' />

                    <div data-aos="zoom-in-up" className='bg-zinc-950 text-center'>
                        <h1 className='text-zinc-200 font-bold fond-serif text-xs sm:text-2xl md:text-2xl lg:text-2xl p-5 '>SPIKES <span className='text-zinc-400text-xs sm:text-lg md:text-lg lg:text-lg px-2 sm:px-4 md:px-4 lg:px-4 font-normal'>│ BECOMES │</span>EXECUTE</h1>
                    </div>
                    <hr className='text-zinc-800' />

                    <div data-aos="zoom-in-up" className='bg-zinc-950 text-center'>
                        <h1 className='text-zinc-200 font-bold fond-serif text-xs sm:text-2xl md:text-2xl lg:text-2xl p-5 me-4 '>BLOCK <span className='text-zinc-400 text-xs sm:text-lg md:text-lg lg:text-lg px-2 sm:px-4 md:px-4 lg:px-4 font-normal'>│ BECOMES │</span>DEBUG</h1>
                    </div>
                    <hr className='text-zinc-800' />

                    <div data-aos="zoom-in-up" className='bg-zinc-950 text-center'>
                        <h1 className='text-zinc-200 font-bold fond-serif text-xs sm:text-2xl md:text-2xl lg:text-2xl p-5 '>RALLY <span className='text-zinc-400 text-xs sm:text-lg md:text-lg lg:text-lg px-2 sm:px-4 md:px-4 lg:px-4 font-normal'>│ BECOMES │</span>ITERATE</h1>
                    </div>
                    <hr className='text-zinc-800' />
                    <div data-aos="zoom-in-up" className='bg-zinc-950 text-center'>
                        <h1 className='text-zinc-200 font-bold fond-serif text-xs sm:text-2xl md:text-2xl lg:text-2xl p-5 ms-4'>TEAMWORK <span className='text-zinc-400 text-xs sm:text-lg md:text-lg lg:text-lg px-2 sm:px-4 md:px-4 lg:px-4 font-normal'>│ BECOMES │</span>COLLABRATION</h1>
                    </div>
                    <hr className='text-zinc-800' />
                    <div data-aos="zoom-in-up" className='bg-zinc-950 text-center'>
                        <h1 className='text-zinc-200 font-bold fond-serif text-xs sm:text-2xl md:text-2xl lg:text-2xl p-5 ms-4'>WIN <span className='text-zinc-400 text-xs sm:text-lg md:text-lg lg:text-lg px-2 sm:px-4 md:px-4 lg:px-4 font-normal'>│ BECOMES │</span>DEPLAY</h1>
                    </div>
                </div>
            </div>
            <div className='bg-black mt-20'>
                <div className='grid grid-cols-1'>

                    <div  className='pt-20 '>
                        <h1 data-aos="zoom-in-up" className='text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-serif font-bold text-zinc-200 text-center'>BUILT TO COMPETE. <br /> DRIVEN TO CREATE.</h1>
                    </div>
                    <div className='text-center mt-10 sm:mt-15 md:mt-15 lg:mt-15'>
                        <h1 data-aos="zoom-in-up" className='text-zinc-500 font-serif text-md sm:text-lg md:text-lg lg:text-lg'>TRAIN HARD. CODE HARDER.</h1>
                    </div>
                    <div className='text-center mt-8 mb-15'>
                       
                        <Link to='/journey'> <button data-aos="zoom-in-up" className='font-serif border border-zinc-400 px-8 py-2 text-white hover:bg-white hover:text-zinc-700  text-sm sm:text-md md:text-md lg:text-md hover:cursor-pointer  '>SEE MY JOURNEY ➝</button> </Link>
                       
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default About