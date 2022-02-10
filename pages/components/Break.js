import React from 'react';

function Break({breakHeight , scrollY}) {

    const styles = {
        height: breakHeight 
    }



  return <div className='break' style={styles}>
       <div className={`content ${scrollY / 10 < 53 && 'hide '} fade-in`}>
      <h1 className='break-header'>I am a methamatetion mind with a heart of a poet</h1>

      <ul className='list' id='slide'>
          <li>I have exellent knowledge in front-end developing</li>
          <li>Specilizing with React js</li>
          <li>Perfect control and confidence in all the basics of JS , HTML and CSS3</li>
          <li>And good knowledge and understanding of Express , Next.js , MongoDB , WordPress and many other framworks</li>


      </ul>
    </div>
  </div>
}

export default Break;
