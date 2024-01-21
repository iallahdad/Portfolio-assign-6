import Image from 'next/image'
import Head from 'next/head'
import Header from '../components/header'
import Link from 'next/link'
import ContactForm from '../components/contactForm/contactForm'



export default function Home() {
  return (

<main className='w-screen h-screen relative'>

  <div className='h-full w-full bg-cover bg-center' style={{backgroundImage: "url(/bg.jpg)"}}>
  
  <div className='flex justify-center py-5'><ContactForm></ContactForm></div> 
  <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
  
  </div>
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