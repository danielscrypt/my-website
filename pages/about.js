import React from 'react'
import Navbar from './components/navbar.js'
import Footer from './components/Foot.js'



function aboutMe() {
  return (
    <div className='containerAbout'>
        <Navbar />
        <div className='contentAbout'>
            <h1 className='title'>
                I'm Daniel !
            </h1>
            <section className='section1'>
               <h2 className='sectionHeader'>
                Education & Courses
               </h2>
            </section>
            <section className='section1'>
               <h2 className='sectionHeader'>
                Education & Courses
               </h2>
            </section>
            <section className='section1'>
               <h2 className='sectionHeader'>
                Education & Courses
               </h2>
            </section>
        </div>
        <Footer />
    </div>
  )
}

export default aboutMe