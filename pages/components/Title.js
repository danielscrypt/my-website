import React from 'react'
import Image from 'next/image'
import profilePic from './componentStyles/profilePic.jpeg'

function Title() {
    return (
        <div>
            <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            <div className='details'>
                    <div className='mainImg'> 
                    <Image
                    objectFit='cover'
                    objectPosition={'-100px -0px'}
                    quality={100}
                    layout='fill' 
                    src={profilePic}
                    className='profileImg' 
                    alt='' /></div>
                    <div className='welcomeText fade-in'>
                    <h2>Your search for a new talent is now complete.</h2>
                    <p>I can be the change<br/> you are looking for </p>
                    </div>
                    </div>
            </ul>
    </div >
        </div>
    )
}

export default Title
