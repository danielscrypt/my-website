import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from './ContactForm';


function footer() {
    
  return <div className='footer' id='contact'>

      <h1 className='footerHeader'>Thank you so much for visiting my website</h1>
      <h3 className='secondHeader'>Feel free to get in touch or to leave your details and I'll get back to you</h3>
      <ul className='contactList'>
           <li><FontAwesomeIcon icon={['fab', 'facebook']} /></li>
          <li><FontAwesomeIcon icon={['fab', 'instagram']} /></li>
          <li>  <FontAwesomeIcon icon={['fab', 'github']} /></li>
          <li><FontAwesomeIcon icon={['fab', 'linkedin']} /></li>
      </ul>
      <div className='contact'>
          <ContactForm />
      </div>
      <div className='emailAndPhone'>
          <span className='whatsapp'><FontAwesomeIcon icon={['fab', 'whatsapp']} /></span>
          <span className='gmail'><FontAwesomeIcon icon={['fab', 'google']} /></span>
      </div>
  </div>;
}

export default footer;
