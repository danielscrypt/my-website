import React from 'react';

function Break({breakHeight , scrollY}) {

    const styles = {
        height: breakHeight 
    }



  return <div className='break' style={styles}>
       <div className={`content ${scrollY / 10 < 53 && 'hide '} fade-in`}>
      <h1 className='break-header'>I have a mathematician mind and a heart of a poet</h1>

      <ul className='list' id='slide'>
          <li>I am a Front-End Developer,</li>
          <li>A worldwide passionate oceaner,</li>
          <li>With a big desire for meeting new people and exploring new challanges,</li>
          <li>In any field that upons through my voyage.</li>


      </ul>
    </div>
  </div>
}

export default Break;
