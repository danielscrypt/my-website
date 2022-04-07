import React from 'react'

function SecondContent() {

    const boxes = [
        {content : 'My Projects' , link : '/projects'} , 
        {content : 'About Me' , link : '/about'} , 
        {content : `Let's Talk !` , link : '#contact'} , 

    ]

    return (
        <div className='first SecondContent'>
            <h1>For more information please make sure to check out </h1>

        <div className='rounds'>
            {boxes.map(box => (
                <a href={box.link} key={box.content} className='box'>
                        <p>{box.content} </p>
                </a>
            ))}
        </div>
            
        </div>
    )
}


export default SecondContent
