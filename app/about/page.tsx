import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/header'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { FaXTwitter,FaLinkedin } from "react-icons/fa6";


export default function About() {
    return (
  
  <main className='w-screen h-screen relative'>
  
    <div className='h-full w-full bg-cover bg-center' style={{backgroundImage: "url(/bg.jpg)"}}>
    
    <div className='max-w-[700px] py-5 text-white mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4'>

    <div className='border-double border-4 border-indigo-600 py-4 text-center col-start-1 col-span-4'><h1 className='font-semibold text-white text-[40px] font-primary'>About<span className='text-indigo-600'>Me</span></h1></div>
      
      <div className='col-start-1 row-span-2'><Image className="rounded-bl-lg border-r-8 border-t-4 border-indigo-600" src='about.jpg' alt="allahdad"/></div>
      <div className='font-semibold border-double border-4 border-indigo-600 px-4 py-2 col-start-2 col-span-3 row-start-2 row-span-3'><p>As a newcomer to this dynamic field, every line of code feels like a step into the unknown. The thrill of creating something from scratch, coupled with the constant learning curve, has been both daunting and exhilarating. Armed with a passion for technology and a determination to grasp the intricacies of web development, I find myself navigating through HTML, Tailwind CSS, and Typescript with wide-eyed enthusiasm. My fascination with technology started as a spark, gradually igniting into a blazing passion for development.</p></div>
      
      <div className='py-5 border-double border-4 border-indigo-600 order-3 flex justify-center gap-6'><Link href={"https://web.facebook.com"}> <FaFacebookF color="#4267B2" /></Link> 
                <Link href={"https://twitter.com"}><FaXTwitter color="#0077B5" /></Link>
                <Link href={"https://www.linkedin.com"}><FaLinkedin color="#0077B5" /></Link></div>
     
  

</div>

   <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'></div>

    <div className='flex-col md:flex-row hidden md:flex flex justify-center gap-10 font-primary'>
      <Link href="/HireMe" className='zoom border border-2 border-yellow-700 text-lg text-slate-400'>HireMe</Link>
      
      <Link href="/skills" className='zoom border border-2 border-yellow-700 text-lg text-slate-400'>Skills
      </Link>
      <Link href="/" className='zoom border border-2 border-yellow-700 text-lg text-slate-400'>Home  
      </Link>
      <Link href="/contact" className='zoom border border-2 border-yellow-700 text-lg text-slate-400'>Contact
      </Link>
      <Link href="/about" className='zoom border border-2 border-yellow-700 text-lg text-slate-400'>About
      </Link>
      
    </div>
     
    </div>

  
  </main>
    )
  }
