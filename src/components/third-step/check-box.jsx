import React from 'react'

function CheckBox(props) {
    let priceMonthly = `+$${props.pricing}/mo`
    let priceYearly = `+$${props.pricing}/yr`
    
    return (
        <div className='checkbox-container'>
             <input className='inputCheck' type="checkbox" />
             <div className='checkbox-titles-wrapper'>
                <h1 className='checkbox-title'>{props.title}</h1>
                <h2 className='checkbox-subtitle'>{props.subtitle}</h2>
             </div>
             <h2 className='checkbox-pricing'>{priceMonthly}</h2>      
        </div>
    )
}

export default CheckBox