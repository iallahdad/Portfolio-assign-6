import Image from 'next/image'
import Head from 'next/head'
import Header from '../blog/[slug]/header'
import Footer from '../blog/[slug]/footer'


export default function Home() {
  return (
    <div>
<Header></Header>

<main>
  <div className='w-196 order-3 flex justify-center'> <img src="handsome.jpg" alt="man" width="400" height="300"/></div>
</main>

<Footer params={{
        slug: ''
      }}></Footer>
</div>
  )
}
