import React from 'react'

function Card(props) {
    return (
        <div className='plan-card'>
            <img src={props.img} alt="" />
            <h1 className='plan-card-title'>{props.name}</h1>
            <h2 className='plan-card-subtitle'>{props.pricing}</h2>
            <h2 className='plan-card-subtitle'>{props.yearlyInfo}</h2>
        </div>
    )
}

export default Card