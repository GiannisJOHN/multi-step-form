import React from 'react'

function Step(props) {
    return (
        <div className='step'>
            <div className='step-rounded'>{props.number}</div>
            <div className='step-title-container'>
                <h3 className='step-subtitle text-style-body-small'>{props.subtitle}</h3>
                <h1 className='text-style-body-medium'>{props.title}</h1>
            </div>
        </div>
    )
}

export default Step