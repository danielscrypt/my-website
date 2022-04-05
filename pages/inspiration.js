import React, { useState } from 'react'
import Navbar from './components/navbar.js'
import Footer from './components/Foot.js'
import Head from 'next/head'




function insparation() {

  

  const quotes = [
    {content : '“Do not feel lonely, the entire universe is inside you.”'  , author:'Galal A-din Rumi' },
    {content : '“Lovers don’t finally meet somewhere. They’re in each other all along.”'  , author:'Galal A-din Rumi'},
    {content : '“There are a thousand ways to kneel and kiss the ground; there are a thousand ways to go home again.”'  , author:'Galal A-din Rumi'},
    {content : '“Raise your words, not voice. It is rain that grows flowers, not thunder.”'  , author:'Galal A-din Rumi'},
    {content : '“This place is a dream. Only a sleeper considers it real. Then death comes like dawn, and you wake up laughing at what you thought was your grief.”'  , author:'Galal A-din Rumi'},
    {content : ' “Would you become a pilgrim on the road of love? The first condition is that you make yourself humble as dust and ashes.”'  , author:'Galal A-din Rumi' },
    {content : '“You are not a drop in the ocean. You are the entire ocean, in a drop.”'  , author:'Galal A-din Rumi'},
    {content : 'If the foot of the trees were not tied to earth, they would be pursuing me. For I have blossomed so much, I am the envy of the gardens.” '  , author:'Galal A-din Rumi'},
    {content : '“Stop acting so small. You are the universe in ecstatic motion.”'  , author:'Galal A-din Rumi'},
    {content : '“Don’t be satisfied with stories, how things have gone with others. Unfold your own myth.” '  , author:'Galal A-din Rumi'},
    {content : '“The journey of a thousand miles begins with a single step.”'  , author:'Lao Tzu'},
    {content : '“A good traveler has no fixed plans and is not intent on arriving.”'  , author:'Lao Tzu'},
    {content : '“Those who know do not speak. Those who speak do not know.”'  , author:'Lao Tzu'},
    {content : '“The truth is not always beautiful, nor beautiful words the truth.”'  , author:'Lao Tzu'},
    {content : '“A man with outward courage dares to die; a man with inner courage dares to live.”'  , author:'Lao Tzu'},
    {content : '“Nature does not hurry, yet everything is accomplished.”'  , author:'Lao Tzu'},
    {content : '“Silence is a source of Great Strength.”'  , author:'Lao Tzu'},
    {content : '“Stop thinking, and end your problems.”'  , author:'Lao Tzu'},
    {content : '“Music in the soul can be heard by the universe.”'  , author:'Lao Tzu'},
    {content : '“Respond intelligently even to unintelligent treatment”'  , author:'Lao Tzu'},
    {content : '“The best fighter is never angry.”'  , author:'Lao Tzu'},


    
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
        <link rel="icon" href="/mill_water_energy_renewable_ecology_icon_191935.ico" />
      </Head>
        <Navbar />
        <div className='contentInspiration'>
          <div className='quoteContainer'>
           <h1 className={`qoute ${fade}`}>{quotes[qouteNum].content} </h1>
           <p className={`Rumi ${fade}`}>{quotes[qouteNum].author} </p>
           </div>

           <button className='btn' onClick={getRandQoute}>Go ahead !</button>
        </div>
        <Footer />
    </div>
  )
}

export default insparation