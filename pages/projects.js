import React from 'react'
import Navbar from './components/navbar.js'
import Footer from './components/Foot.js'
import Head from 'next/head'
import Image from 'next/image'
import MiniPic from './components/componentStyles/miniProjects.png'
import colorsPic from './components/componentStyles/colors.png'
import YelpCampPic from './components/componentStyles/yelpCamp.png'



function projects() {
    const projects = [
      {   id:'p1' , 
      projectName: '30 Mini Projects' , 
      mainImgSrc: 'demo' , 
      imagesSrc : MiniPic , 
      description: '30 Mini Projects made with pure JS , CSS and HTML ! No frameworks involved !', 
      link: 'https://mini-projects-daniel.herokuapp.com/'
      },
        {   id:'p1' , 
        projectName: 'Colors Project' , 
        mainImgSrc: 'demo' , 
        imagesSrc : colorsPic , 
        description: 'Color app that helps you pick a color according to your needs ! You will be able to choose from a variaty of different palattes, change the opacity the color code and much more !',
        link : 'https://color-project-daniel.herokuapp.com/'
        } , 
        {   id:'p1' , 
        projectName: 'YelpCamp' , 
        mainImgSrc: 'demo' , 
        imagesSrc : YelpCampPic , 
        description: 'Camps search and sharing engine that allows you to read and review camps around the world and also to publish one on your own. ***currently offline...'
        } 
    ]
    

  return (
    <div className='projectPage'>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Handlee&family=Leckerli+One&family=Neucha&family=Zen+Kurenaido&display=swap" rel="stylesheet"></link>
        <Head>
        <title>My Projects</title>
        <meta name="ProjectsPage" content="Generated by DanielScrypt" />
        <link rel="icon" href="/mill_water_energy_renewable_ecology_icon_191935.ico" />
      </Head>
        <Navbar />
        <div className='projects'>
        <h1 className='title'>Check out some of my skills !</h1>
        <h2 className='secondTitle'>The code for all the projects is distributed on github</h2>
        {projects.map(p => (
        <section key={p.projectName} className='projectSection'>
            <h2 className='projectHeader'><a rel="noreferrer" target='_blank' href={p.link} >{p.projectName}</a></h2>
            <div className='projectContent'>
                <p>{p.description}</p>
                <div className='img' >
                <Image
                alt='project-image' 
                src={p.imagesSrc} />
                </div>
            </div>
        </section>
        ))}
        </div>

        <Footer />
    </div>
  )
}

export default projects