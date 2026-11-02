import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import AOS from 'aos';
import "aos/dist/aos.css"
function Skills() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, [])


    return (
        <div className='bg-zinc-950'>
            <div className='grid grid-cols-1 ms-3 sm:ms-10 md:ms-10 lg:ms-10 pt-18 sm:pt-20 md:pt-20 lg:pt-20'>
                <div className=''>
                    <p h1 data-aos="zoom-in-up"  className='text-zinc-500 font-serif text-xs sm:text-sm md:text-sm lg:text-sm'>_____HOVER A CARD_WATCH IT MOVE</p>
                </div>
                <div className='mt-5'>
                    <span h1 data-aos="zoom-in-up"  className='text-zinc-600 font-bold text-2xl sm:text-4xl md:text-4xl lg:text-4xl'>05</span>
                    <span h1 data-aos="zoom-in-up"  className='text-zinc-200  ms-2 sm:ms-5 md:ms-5 lg:ms-5  font-serif text-3xl sm:text-6xl md:text-6xl lg:text-6xl font-bold'>THE SKILL WALL</span>
                </div>
            </div>
            <div className='grid grid-cols-1'>
                <div className=' ms-2 sm:ms-10 md:ms-10 lg:ms-10 mt-10'>
                    <h1 h1 data-aos="zoom-in-up"  className='text-zinc-500 font-serif text-xs sm:text-sm md:text-sm lg:text-sm '>FRONTEND </h1><hr className='text-zinc-700' />
                </div>
            </div >
            <div className='grid grid-cols-4 mt-10 ms-2 sm:ms-5 md:ms-10 lg:ms-10 me-2 sm:me-5 md:me-10 lg:me-10 gap-2 lg:gap-20 sm:gap-5 md:gap-10'>
                <div h1 data-aos="zoom-in-up"  className='bg-black'>
                    <h1 className='text-zinc-200 sm:font-serif md:font-serif lg:font-serif font-bold text-xs sm:text-lg md:text-xl lg:text-2xl text-center py-10 sm:py-15 md:py-15 lg:py-15 hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950 '>HTML5</h1>
                </div>
                <div h1 data-aos="zoom-in-up"  className='bg-black'>
                    <h1 className='text-zinc-200 sm:font-serif md:font-serif lg:font-serif font-bold text-xs sm:text-lg md:text-xl lg:text-2xl text-center py-10 sm:py-15 md:py-15 lg:py-15 hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>CSS3</h1>
                </div>
                <div h1 data-aos="zoom-in-up"  className='bg-black'>
                    <h1 className='text-zinc-200 sm:font-serif md:font-serif lg:font-serif font-bold text-xs sm:text-lg md:text-xl lg:text-2xl text-center py-10 sm:py-15 md:py-15 lg:py-15 hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>JAVASCRIPT</h1>
                </div>
                <div h1 data-aos="zoom-in-up"  className='bg-black'>
                    <h1 className='text-zinc-200 sm:font-serif md:font-serif lg:font-serif font-bold text-xs sm:text-lg md:text-xl lg:text-2xl text-center py-10 sm:py-15 md:py-15 lg:py-15 hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>BOOTSTRAP</h1>
                </div>
            </div>
            <div className='grid grid-cols-1'>
                <div className='ms-2 sm:ms-10 md:ms-10 lg:ms-10 mt-10'>
                    <h1 h1 data-aos="zoom-in-up"  className='text-zinc-500 sm:font-serif md:font-serif lg:font-serif text-xs sm:text-sm md:text-sm lg:text-sm '>BACKEND </h1><hr className='text-zinc-700' />
                </div>
            </div>
            <div className='grid grid-cols-4 mt-10  ms-2 sm:ms-5 md:ms-10 lg:ms-10 me-2 sm:me-5 md:me-10 lg:me-10 gap-2 lg:gap-20 sm:gap-5 md:gap-10'>
                <div h1 data-aos="zoom-in-up"  className='bg-black'>
                    <h1 className='text-zinc-200 sm:font-serif md:font-serif lg:font-serif font-bold text-sm sm:text-lg md:text-xl lg:text-2xl text-center py-10 sm:py-15 md:py-15 lg:py-15 hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>PYTHON</h1>
                </div>
                <div h1 data-aos="zoom-in-up"  className='bg-black'>
                    <h1 className='text-zinc-200 sm:font-serif md:font-serif lg:font-serif font-bold text-sm sm:text-lg md:text-xl lg:text-2xl text-center py-10 sm:py-15 md:py-15 lg:py-15 hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>DJANGO</h1>
                </div>
                <div h1 data-aos="zoom-in-up"  className='bg-black'>
                    <h1 className='text-zinc-200 sm:font-serif md:font-serif lg:font-serif font-bold text-sm sm:text-lg md:text-xl lg:text-2xl text-center py-10 sm:py-15 md:py-15 lg:py-15 hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>DRF</h1>
                </div>
            </div>
            <div className='grid grid-cols-1'>
                <div className='ms-2 sm:ms-10 md:ms-10 lg:ms-10 mt-10'>
                    <h1 h1 data-aos="zoom-in-up"  className='text-zinc-500 sm:font-serif md:font-serif lg:font-serif text-xs sm:text-sm md:text-sm lg:text-sm '>DATABASE</h1><hr className='text-zinc-700' />
                </div>
            </div>
            <div className='grid grid-cols-4 mt-10  ms-2 sm:ms-5 md:ms-10 lg:ms-10 me-2 sm:me-5 md:me-10 lg:me-10 gap-2 lg:gap-20 sm:gap-5 md:gap-10'>
                <div h1 data-aos="zoom-in-up"  className='bg-black'>
                    <h1 className='text-zinc-200 sm:font-serif md:font-serif lg:font-serif font-bold text-sm sm:text-lg md:text-xl lg:text-2xl text-center py-10 sm:py-15 md:py-15 lg:py-15 hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>MYSQL</h1>
                </div>
                <div h1 data-aos="zoom-in-up"  className='bg-black'>
                    <h1 className='text-zinc-200 sm:font-serif md:font-serif lg:font-serif font-bold text-sm sm:text-lg md:text-xl lg:text-2xl text-center py-10 sm:py-15 md:py-15 lg:py-15 hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>SQLITE</h1>
                </div>
            </div>
            <div className='grid grid-cols-1'>
                <div className='ms-2 sm:ms-10 md:ms-10 lg:ms-10 mt-10'>
                    <h1 h1 data-aos="zoom-in-up"  className='text-zinc-500 sm:font-serif md:font-serif lg:font-serif text-xs sm:text-sm md:text-sm lg:text-sm '>TOOLS</h1><hr className='text-zinc-700' />
                </div>
            </div>
            <div className='grid grid-cols-4 mt-10 ms-2 sm:ms-5 md:ms-10 lg:ms-10 me-2 sm:me-5 md:me-10 lg:me-10 gap-2 lg:gap-20 sm:gap-5 md:gap-10'>
                <div h1 data-aos="zoom-in-up"  className='bg-black'>
                    <h1 className='text-zinc-200 sm:font-serif md:font-serif lg:font-serif font-bold text-sm sm:text-lg md:text-xl lg:text-2xl text-center py-10 sm:py-15 md:py-15 lg:py-15 hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>GIT</h1>
                </div>
                <div h1 data-aos="zoom-in-up"  className='bg-black'>
                    <h1 className='text-zinc-200 sm:font-serif md:font-serif lg:font-serif font-bold text-sm sm:text-lg md:text-xl lg:text-2xl text-center py-10 sm:py-15 md:py-15 lg:py-15 hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>GITHUB</h1>
                </div>
                <div h1 data-aos="zoom-in-up"  className='bg-black'>
                    <h1 className='text-zinc-200 sm:font-serif md:font-serif lg:font-serif font-bold text-sm sm:text-lg md:text-xl lg:text-2xl text-center py-10 sm:py-15 md:py-15 lg:py-15 hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>VS CODE</h1>
                </div>
                <div h1 data-aos="zoom-in-up"  className='bg-black'>
                    <h1 className='text-zinc-200 sm:font-serif md:font-serif lg:font-serif font-bold text-sm sm:text-lg md:text-xl lg:text-2xl text-center py-10 sm:py-15 md:py-15 lg:py-15 hover:cursor-pointer hover:bg-zinc-500 hover:text-zinc-950'>POSTMAN</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 mt-15 text-center bg-black'>
                <div>
                    <h1 h1 data-aos="zoom-in-up"  className=' text-5xl sm:text-6xl md:text-6xl lg:text-6xl text-zinc-200 font-serif font-bold mt-20'>SKILLS IN <br />ACTIVE TRAINING.</h1>
                </div>
                <div className='mt-10 mb-20'>
                    <Link to='/project'>
                    <button h1 data-aos="zoom-in-up"  className='text-sm sm:text-md md:text-md lg:text-md hover:cursor-pointer font-serif border border-zinc-400 px-8 py-2 text-white hover:bg-white  hover:text-zinc-700   '>SEE THEM IN ACTION ➝</button>
                    </Link>
                </div>
            </div>
         
        </div>
    )
}

export default Skills