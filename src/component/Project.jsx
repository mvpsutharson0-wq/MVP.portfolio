import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'

import AOS from 'aos';
import "aos/dist/aos.css"
function Project() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, [])

    return (
        <div className='bg-zinc-950'>
            <div className='grid grid-cols-1 ms-3 sm:ms-10 md:ms-10 lg:ms-10 pt-18 sm:pt-30 md:pt-30 lg:pt-30 '>
                <div className=''>
                    <p data-aos="zoom-in-up" className='text-zinc-500 font-serif text-xs sm:text-sm md:text-sm lg:text-sm'>_____PRACTICE SUILDS PLAYERS-PROJECTS BUILD DEVELOPERS</p>
                </div>
                <div data-aos="zoom-in-up" className='mt-5'>
                    <span className='text-zinc-600 font-bold   text-2xl sm:text-4xl md:text-4xl lg:text-4xl'>06</span>
                    <span className='text-zinc-200 ms-2 sm:ms-5 md:ms-5 lg:ms-5 text-3xl sm:text-6xl md:text-6xl lg:text-6xl  font-serif  font-bold'>SELECTED WORK</span>
                </div>
                <div className='mt-5'>
                    <p data-aos="zoom-in-up" className='text-zinc-500 text-sm sm:text-md md:text-md lg:text-md '>Eight full-stcks builds from my Python Full Stack training. Each one <br />
                        lasbend honestly as a protfolio project-each one built end to end;<br />
                        database,backend,frontend.</p>
                </div>
            </div>



            <div data-aos="zoom-in-up" className='bg-black ms-15 me-15 border border-zinc-600 mt-20'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 '>
                    <div>
                        <h1 className='text-6xl sm:text-9xl md:text-9xl lg:text-9xl flex justify-center mt-20 font-bold text-zinc-500' >01</h1>
                    </div>
                    <div className='text-center'>
                        <h1 className='border border-zinc-600 text-sm text-zinc-400 w-40 inline-block ps-2 justify-center flex mt-5 sm:mt-10 md:mt-10 lg:mt-15'>PORTFOLIO PROJECT</h1>
                        <h1 className='text-zinc-200 text-2xl font-bold font-serfi mt-3'>E-COMMERCE PLATFORM</h1>
                        <p className='text-md text-zinc-500 mt-1 ms-2'>A full-stack online store with product catalogue, cart, secure checkout flow and an admin
                            dashboard for managing inventory and orders.</p>
                        <div>
                        </div>
                        <div className='mt-5 pb-10 sm:pb-0 md:pb-0 lg:pb-10 ms-2'>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700  hover:cursor-pointer'>PYTHON</button>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700  ms-2 hover:cursor-pointer'>DJANGO</button>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700   ms-2 hover:cursor-pointer'>MYSQL</button>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700   ms-2 hover:cursor-pointer'>BOOTSRAP</button>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700   mt-3 hover:cursor-pointer'>JAVASCRIPT</button>
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className=' text-zinc-200 ms-0  mt-0 sm:mt-10 md:mt-10 lg:mt-40 pb-10 sm:pb-10 md:pb-15 lg:pb-1 hover:cursor-pointer '>VIEW PROJECT ➝</h1>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-up" className='bg-black ms-15 me-15 border border-zinc-600 mt-20'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 '>
                    <div>
                        <h1 className='text-6xl sm:text-9xl md:text-9xl flex justify-center mt-15 font-bold text-zinc-500' >02</h1>
                    </div>
                    <div className='text-center'>
                        <h1 className='border border-zinc-600 text-sm text-zinc-400 w-40  inline-block ps-2 justify-center flex  mt-5 sm:mt-10 md:mt-10 lg:mt-15 '>PORTFOLIO PROJECT</h1>
                        <h1 className='text-zinc-200 text-2xl font-bold font-serfi mt-2'>HOSPITAL MANAGEMENT SYSTEM</h1>
                        <p className='text-md text-zinc-500 mt-1'>A management system for clinics-patient records, doctor scheduling and appointment booking <br />
                            with role-bassed access.
                        </p>
                        <div>
                        </div>
                        <div className='mt-5 pb-10 sm:pb-0 md:pb-0 lg:pb-10'>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700  hover:cursor-pointer'>PYTHON</button>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700  ms-2 hover:cursor-pointer'>DJANGO</button>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700   ms-2 hover:cursor-pointer'>MYSQL</button>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700   ms-2 hover:cursor-pointer'>BOOTSRAP</button>

                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className=' text-zinc-200 ms-0  mt-0 sm:mt-10 md:mt-10 lg:mt-35 pb-10 sm:pb-10 md:pb-15 lg:pb-1 hover:text-zinc-700 hover:cursor-pointer'>VIEW PROJECT ➝</h1>
                    </div>
                </div>


            </div>
            <div data-aos="zoom-in-up" className='bg-black ms-15 me-15 border border-zinc-600 mt-20'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 '>
                    <div>
                        <h1 className='text-6xl sm:text-9xl md:text-9xl flex justify-center mt-15 font-bold text-zinc-500' >03</h1>
                    </div>
                    <div className='text-center'>
                        <h1 className='border border-zinc-600 text-sm text-zinc-400 w-40  inline-block ps-2 justify-center flex  mt-5 sm:mt-10 md:mt-10 lg:mt-15 '>PORTFOLIO PROJECT</h1>
                        <h1 className='text-zinc-200 text-2xl font-bold font-serfi mt-2'>STUDENT MANAGEMNET SYSTEM</h1>
                        <p className='text-md text-zinc-500 mt-1'>A CRUD-driven system for institutions to manage students, course, attendance and preformance.
                        </p>
                        <div>
                        </div>
                        <div className='mt-5 pb-10 sm:pb-0 md:pb-0 lg:pb-15'>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700 hover:cursor-pointer '>PYTHON</button>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700  ms-2  hover:cursor-pointer'>DJANGO</button>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700   ms-2 hover:cursor-pointer '>MYSQL</button>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700   ms-2  hover:cursor-pointer'>BOOTSRAP</button>

                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className=' text-zinc-200 ms-0  mt-0 sm:mt-10 md:mt-10 lg:mt-33 pb-10 sm:pb-15 md:pb-15 lg:pb-1 hover:text-zinc-700 hover:cursor-pointer'>VIEW PROJECT ➝</h1>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-up" className='bg-black ms-15 me-15 border border-zinc-600 mt-20'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 '>
                    <div>
                        <h1 className='text-6xl sm:text-9xl md:text-9xl flex justify-center mt-15 font-bold text-zinc-500' >04</h1>
                    </div>
                    <div className='text-center'>
                        <h1 className='border border-zinc-600 text-sm text-zinc-400 w-40  inline-block ps-2 justify-center flex  mt-5 sm:mt-10 md:mt-10 lg:mt-15 '>PORTFOLIO PROJECT</h1>
                        <h1 className='text-zinc-200 text-2xl font-bold font-serfi mt-2'>RESTAURANT ORDERING SYSTEM</h1>
                        <p className='text-md text-zinc-500 mt-1'>A digtal ordering expenece-live menu, cart order placement and kitchen-side order tracking though REST APIs.
                        </p>
                        <div>
                        </div>
                        <div className='mt-5 pb-10 sm:pb-0 md:pb-0 lg:pb-10'>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700 hover:cursor-pointer '>JAVESCRIPT</button>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700  ms-2 hover:cursor-pointer '>DJANGO</button>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700   ms-2  hover:cursor-pointer'>MYSQL</button>
                            <button className='font-serif border border-zinc-500 px-2 py-1 text-zinc-300 hover:bg-white  hover:text-zinc-700   ms-2  hover:cursor-pointer'>BOOTSRAP</button>

                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className=' text-zinc-200 ms-0  mt-0 sm:mt-10 md:mt-10 lg:mt-33 pb-10 sm:pb-15 md:pb-15 lg:pb-1 hover:cursor-pointer hover:text-zinc-700'>VIEW PROJECT ➝</h1>
                    </div>
                </div>
            </div>
            <div className='bg-black grid grid-cols-1 mt-25 '>
                <div className='bg-black text-center'>
                    <h1 data-aos="zoom-in-up" className=' pt-20 sm:pt-30 md:pt-30 lg:pt-30 text-zinc-200 text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-serif font-bold'>HAVE A PROJECT <br /> WORTH BUILDING ?</h1>
                    <div>
                        <Link to='/contact'>
                            <button data-aos="zoom-in-up" className='mt-10 font-serif border border-zinc-400 px-8 py-2  hover:cursor-pointer text-white hover:bg-white  hover:text-zinc-700 mb-20  '>LET'S TALK ➝</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Project