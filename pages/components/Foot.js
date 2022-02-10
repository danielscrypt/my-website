import React from 'react';

function footer() {
  return <div className='footer'>

      <h1 className='footerHeader'>Thank you so much for visiting my website</h1>
      <h3 className='secondHeader'>Feel free to get in touch or to leave your details and I'll get back to you</h3>
      <ul className='contactList'>
           <li>instgram</li>
          <li>facebook</li>
          <li>github</li>
          <li>linkedin</li>
      </ul>
      <div className='emailAndPhone'>
          <span className='whatsapp'>whatsapp</span>
          <span className='gmail'>gmail</span>
      </div>
  </div>;
}

export default footer;
