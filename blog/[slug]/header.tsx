import { FaFacebookF } from 'react-icons/fa'
import { FaXTwitter,FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';
export default function Header() {
  return (
 <header className='bg-gray-50'>
    <div className='xl:container xl:mx-auto flex flex-col item-center sm:flex-row sm:justify-between text-center py-3'>
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
            <input type='text' className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 
            rounded-full text-sm shadow-sm pla placeholder-slate-500 focus:outline-none focus:border-sky-500 focus-ring-1 focus:ring-sky-500" placeholder="Search..."/>
                </div>
               
                <div className="shrink w-80 sm:order-2 font-bold text-2xl">
                <Link href={"/"}>BLOG</Link> </div>
             
                <div className="w-96 order-3 flex justify-center">
                <div className='flex gap-6'>
                <Link href={"https://web.facebook.com"}> <FaFacebookF color="#4267B2" /></Link> 
                <Link href={"https://twitter.com"}><FaXTwitter color="#000000" /></Link>
                <Link href={"https://www.linkedin.com"}><FaLinkedin color="#0077B5" /></Link>
                    </div>

                </div>

    </div>
 </header>
  )
}
