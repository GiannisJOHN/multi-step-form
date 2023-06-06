import React from 'react'



function Heading(props) {
    return (
        <div className='heading-container'>
            <h1 className='heading-title'>{props.title}</h1>
            <h2 className='heading-subtitle'>{props.subtitle}</h2>
        </div>
    )
}

export default Heading