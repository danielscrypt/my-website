import React from 'react'
import Navbar from './components/navbar.js'
import Footer from './components/Foot.js'


function projects() {
    const projects = [
        {   id:'p1' , 
        projectName: 'Colors Project' , 
        mainImgSrc: 'demo' , 
        imagesSrc : ['demo1' , 'demo2' , 'demo3'], 
        description: 'some some some'
        } , 
        {   id:'p1' , 
        projectName: 'YelpCamp' , 
        mainImgSrc: 'demo' , 
        imagesSrc : ['demo1' , 'demo2' , 'demo3'], 
        description: 'some some some'
        } , 
        {   id:'p1' , 
        projectName: '30 Mini Projects' , 
        mainImgSrc: 'demo' , 
        imagesSrc : ['demo1' , 'demo2' , 'demo3'], 
        description: 'some some some'
        }
    ]
  return (
    <div className='projectPage'>
        <Navbar />
        <div className='projects'>
        <h1 className='title'>Check out some of my skills !</h1>
        {projects.map(p => (
        <section className='projectSection'>
            <h2 className='projectHeader'>{p.projectName}</h2>
            <div className='projectContent'>
                <p>{p.description}</p>
                <p>Image goes here</p>
            </div>
        </section>
        ))}
        </div>

        <Footer />
    </div>
  )
}

export default projects