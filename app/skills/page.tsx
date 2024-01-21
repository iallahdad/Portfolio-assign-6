"use client"
import Image from 'next/image'
import Head from 'next/head'
import "swiper/css"
import Link from 'next/link'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { skillData } from '../constant/constant'



export default function Skills() {
  return (

    

  <div style={{backgroundImage: "url(/bg.jpg)"}} className='h-screen w-screen items-center justify-center bg-cover bg-center'>

  <div className='flex flex-col gap-20 text-center items-center'>
    <div className='flex flex-col items-center gap-4'>
      <h1 className='font-semibold text-white text-[40px]'>Skills
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
          {" "}
          &
          {" "}
        </span>Technologies
      </h1>
<p className='text-gray-500 text-[20px]'>Using the latest Technologies this world has to offer</p>
    </div>
    <Swiper
      slidesPerView={5}
      loop={true}
      autoplay={{
        delay:0,
        disableOnInteraction: false
      }}
      speed={5000}
      modules={[Autoplay]}
      className="max-w-[80%]">
        {skillData.map((skill,index)=>(
          <SwiperSlide key={index}>
            <Image
            src={skill.Image}
            alt={skill.name}
            width={skill.width}
            height={skill.height}/>
          </SwiperSlide>
        ))}
    </Swiper>
    <Swiper
      slidesPerView={5}
      loop={true}
      autoplay={{
        delay:0,
        disableOnInteraction: false,
        reverseDirection: true
      }}
      speed={5000}
      modules={[Autoplay]}
      className="max-w-[80%]">
        {skillData.map((skill,index)=>(
          <SwiperSlide key={index}>
            <Image
            src={skill.Image}
            alt={skill.name}
            width={skill.width}
            height={skill.height}/>
          </SwiperSlide>
        ))}
    </Swiper>
    </div>
  
  <div className='flex-col md:flex-row hidden md:flex flex items-center justify-center gap-10 py-10 font-primary'>
    <Link href="/HireMe" className='zoom border border-2 border-yellow-700 text-lg text-slate-400'>HireMe</Link>
    <Link href="/skills" className='zoom border border-2 border-yellow-700 text-lg text-slate-400'>Skills</Link>
    <Link href="/" className='zoom border border-2 border-yellow-700 text-lg text-slate-400'>Home</Link>  
    <Link href="/contact" className='zoom border border-2 border-yellow-700 text-lg text-slate-400'>Contact</Link>
    <Link href="/About" className='zoom border border-2 border-yellow-700 text-lg text-slate-400'>About</Link>
    
    
  </div>
  </div>
  

  
  
 


  )
}
