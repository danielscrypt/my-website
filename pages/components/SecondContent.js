import React from 'react'
import  Link from 'next/link';


function SecondContent() {

    const boxes = [
        {content : 'My Projects' , link : '/projects'} , 
        {content : 'About Me' , link : '/about'} , 
        {content : `Let's Talk !` , link : '#contact'} , 

    ]

    return (
        <div className='mainContent SecondContent'>
            <h1>For more information please make sure to check out </h1>

        <div className='rounds'>
            {boxes.map(box => (
                <Link href={box.link} key={box.content}>
                        <p  className='box'>{box.content} </p>
                </Link>
            ))}
        </div>
            
        </div>
    )
}


export default SecondContent
