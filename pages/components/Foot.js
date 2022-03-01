import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from './ContactForm';
import Link from 'next/link';


function footer() {
    
  return <div className='footer' >
      <div className='footerContainer'>
      <h1 className='footerHeader'>Thank you so much for visiting my website</h1>
      <h3 className='secondHeader'>Feel free to get in touch or to leave your details and I'll get back to you</h3>
      <ul className='contactList'>
          <a href='https://www.facebook.com/daniel.nagar3' target='_blank'>
              <div> <li className='icon'><FontAwesomeIcon icon={['fab', 'facebook']} /></li></div>
              </a>
         <a href='https://www.instagram.com/daniel_ng5/' target='_blank'>
             <div> <li className='icon '><FontAwesomeIcon icon={['fab', 'instagram']} /></li></div>
             </a>
          <a href='https://github.com/danielscrypt' target='_blank'>
              <div><li className='icon '>  <FontAwesomeIcon icon={['fab', 'github']} /></li></div>
              </a>
         <a href='https://www.linkedin.com/in/%D7%93%D7%A0%D7%99%D7%90%D7%9C-%D7%A0%D7%92%D7%A8-b54596229/' target='_blank'>
             <div> <li className='icon '><FontAwesomeIcon icon={['fab', 'linkedin']} /></li></div>
             </a>
      </ul>
      <div className='contact'>
          <ContactForm />
      </div>
      <div className='emailAndPhone' id='contact'>
          <a className='whatsapp icon' href='https://wa.me/972546881590' target='_blank'>
              <span ><FontAwesomeIcon icon={['fab', 'whatsapp']} /></span>
              </a>
         <a className='gmail icon' href=' https://mail.google.com/mail/?extsrc=mailto&url=mailto%3A%3Fto%3Dd.n9204%40gmail.com%26bcc%26subject%3DGreat%2520Website%26' target='_blank'>
             <div> <span ><FontAwesomeIcon icon={['fab', 'google']} /></span></div>
             </a>
      </div>
      </div>
  </div>;
}

export default footer;
