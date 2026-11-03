import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'

import AOS from 'aos';
import "aos/dist/aos.css"
function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, [])
    return (
        <div className='bg-zinc-950'>
            <div className='grid grid-cols-1 ms-3 sm:ms-10 md:ms-10 lg:ms-10 pt-15 sm:pt-20 md:pt-20 lg:pt-20'>
                <h1 className='text-4xl sm:text-6xl md:text-6xl lg:text-6xl text-zinc-200 font-bold font-serif'>LET'S BUILD</h1>
                <h1 data-aos="zoom-in-up" className='text-3xl sm:text-6xl md:text-6xl lg:text-6xl text-zinc-200 font-bold font-serif'>SOMETING.</h1>
                <h1 data-aos="zoom-in-up" className='text-3xl sm:text-6xl md:text-6xl lg:text-6xl text-zinc-500 font-bold font-serif'>LET'S MAKE IT MOVE. </h1>
                <p data-aos="zoom-in-up" className='font-serif text-zinc-500 mt-2 sm:mt-5 md:mt-5 lg:mt-5 text-xs sm:text-md md:text-md lg:text-md'>whether it's a development opportunity, collabaration, project or simply a <br />
                    conversation abput technology, I,d love to connect.</p>
            </div>
            <div className='grid grid-cols-3 bg-black mt-15 ms-4 sm:ms-10 md:ms-10 lg:ms-10 me-4 sm:me-10 md:me-10 lg:me-10 border border-zinc-500 hover:cursor-pointer hover:bg-zinc-900 '>
                <div className='mt-7 mb-7 '>
                    <h1 data-aos="zoom-in-up" className='ms-2 sm:ms-5 md:ms-5 lg:ms-5  text-xs flex items-center  sm:text-xl md:text-2xl lg:text-3xl text-zinc-200 font-bold font-serif '>GITHUB</h1>
                </div>
                <div className='mt-7 mb-7 '>
                    <p data-aos="zoom-in-up" className=' text-xs sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-zinc-200 text-center'>mvpsutharson0-wq</p>
                </div>
                <div className='mt-7 mb-7 '>
                    <p data-aos="zoom-in-up" className='text-end text-xs   sm:text-3xl md:text-3xl lg:text-3xl font-bold font-serif text-zinc-200 me-10 sm:me-20 md:me-20 lg:me-20 hover:text-zinc-600'>➝</p>
                </div>
            </div>
            <div className='grid grid-cols-3 bg-black   ms-4 sm:ms-10 md:ms-10 lg:ms-10 me-4 sm:me-10 md:me-10 lg:me-10 border border-zinc-500 hover:cursor-pointer hover:bg-zinc-900'>
                <div className='mt-7 mb-7 '>
                    <h1 data-aos="zoom-in-up" className='ms-2 sm:ms-5 md:ms-5 lg:ms-5  text-xs flex items-center  sm:text-xl md:text-2xl lg:text-3xl text-zinc-200 font-bold font-serif'>LINKDIN</h1>
                </div>
                <div className='mt-7 mb-7 '>
                    <p data-aos="zoom-in-up" className='text-xs sm:text-lg md:text-2xl lg:text-2xl font-serif font-bold text-zinc-200 text-center'>SUTHARON U</p>
                </div>
                <div className='mt-7 mb-7 '>
                    <p data-aos="zoom-in-up" className='text-end text-xs   sm:text-3xl md:text-3xl lg:text-3xl font-bold font-serif text-zinc-200 me-10 sm:me-20 md:me-20 lg:me-20 hover:text-zinc-600'>➝</p>
                </div>
            </div>
            <div className='grid grid-cols-3 bg-black   ms-4 sm:ms-10 md:ms-10 lg:ms-10 me-4 sm:me-10 md:me-10 lg:me-10 border border-zinc-500 hover:cursor-pointer hover:bg-zinc-900'>
                <div className='mt-7 mb-7 '>
                    <h1 data-aos="zoom-in-up" className='ms-2 sm:ms-5 md:ms-5 lg:ms-5  text-xs flex items-center  sm:text-xl md:text-2xl lg:text-3xl text-zinc-200 font-bold font-serif'>INSTAGRAM</h1>
                </div>
                <div className='mt-7 mb-7 '>
                    <p data-aos="zoom-in-up" className='text-xs sm:text-lg md:text-xl lg:text-2xl font-serif font-bold text-zinc-200 text-center'>MVP SUTHARSON</p>
                </div>
                <div className='mt-7 mb-7 '>
                    <p data-aos="zoom-in-up" className='text-end text-xs  sm:text-3xl md:text-3xl lg:text-3xl font-bold font-serif text-zinc-200 me-10 sm:me-20 md:me-20 lg:me-20 hover:text-zinc-600'>➝</p>
                </div>
            </div>
            <div className='grid grid-cols-3 bg-black   ms-4 sm:ms-10 md:ms-10 lg:ms-10 me-4 sm:me-10 md:me-10 lg:me-10 border border-zinc-500 hover:cursor-pointer hover:bg-zinc-900 '>
                <div className='mt-7 mb-7 '>
                    <h1 data-aos="zoom-in-up" className='ms-2 sm:ms-5 md:ms-5 lg:ms-5  text-xs flex items-center  sm:text-xl md:text-3xl lg:text-3xl text-zinc-200 font-bold font-serif'>EMAIL</h1>
                </div>
                <div className='mt-7 mb-7 '>
                    <p data-aos="zoom-in-up" className='text-xs sm:text-lg md:text-2xl lg:text-2xl font-serif font-bold text-zinc-200 text-center'>MVPSUTHARON0 @GMAIL.COM</p>
                </div>
                <div className='mt-7  mb-7 '>
                    <p data-aos="zoom-in-up" className='text-end text-xs  sm:text-3xl md:text-3xl lg:text-3xl font-bold font-serif text-zinc-200 me-10 sm:me-20 md:me-20 lg:me-20 hover:text-zinc-600'>➝</p>
                </div>
            </div>
            <div className='grid grid-cols-1 bg-black text-center  mt-20 sm:mt-30 md:mt-30 lg:mt-30'>
                <h1 data-aos="zoom-in-up" className='text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-bold font-serif text-zinc-200  mt-15 sm:mt-25 md:mt-25 lg:mt-25 '>READY FOR THE <br />
                    NEXT POINT?</h1>
                <p data-aos="zoom-in-up" className='text-zinc-500 font-serif font-bold text-md mt-7 sm:mt-10 md:mt-10 lg:mt-10'>THE BALL IS IN YOUR COURT.</p>
                <div className='mb-20'>
                    <Link to='/'>
                        <button data-aos="zoom-in-up" className='mt-5 sm:mt-8 md:mt-8 lg:mt-8 text-sm sm:text-md md:text-md lg:text-md  hover:cursor-pointer font-serif border border-zinc-400 px-8 py-2 text-white hover:bg-white  hover:text-zinc-700   '>HOME ➝</button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Contact