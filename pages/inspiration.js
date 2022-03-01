import React, { useState } from 'react'
import Navbar from './components/navbar.js'
import Footer from './components/Foot.js'
import Head from 'next/head'




function insparation() {

  

  const quotes = [
    {content : 'cool phrase'  , author:'Lao Tzu' },
    {content : 'cool phrase by some'  , author:'Lao'},
    {content : 'cool phrase helooo there'  , author:'Rumi'},
    {content : 'Some cool phrase by Rumi'  , author:'Galal A-Din Rumi'},
    {content : 'cool phrase yeyey there'  , author:'Very Good'},
    
  ]

const [qouteNum , setQouteNum] = useState(2); 
const [fade , setFade] = useState('fade-in')

  const getRandQoute = () => {
    setQouteNum(Math.floor(Math.random() * quotes.length ) )
    setFade('fade-out')
    setTimeout( () => {
      setFade('fade-in')
    } , 200)
    return qouteNum
  }


  return (
    <div className='containerAbout'>
       <Head>
        <title>Get inspired</title>
        <meta name="InspirationPage" content="Generated by DanielScrypt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
        <div className='contentInspiration'>
           <h1 className={`qoute ${fade}`}>{quotes[qouteNum].content} </h1>
           <p className={`Rumi ${fade}`}>{quotes[qouteNum].author} </p>

           <button onClick={getRandQoute}>Go ahead !</button>
        </div>
        <Footer />
    </div>
  )
}

export default insparation