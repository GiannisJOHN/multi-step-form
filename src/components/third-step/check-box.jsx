import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { checkAddOn, uncheckAddOn } from '../../global-state/finalSlice';


function CheckBox(props) {
    let activeState = useSelector((state) => {return state.final})
    let priceMonthly = `+$${props.pricing.monthly}/mo`
    let priceYearly = `+$${props.pricing.yearly}/yr`
    let price = activeState.payment.mode === 'monthly' ? priceMonthly : priceYearly
    let dispatch = useDispatch()
    let checkedClass = props.checked === true ? 'checked' : ''


    function handleCheckbox(event) {
        let status = event.target.checked
        console.log(status)

        if (status === false) {
            dispatch(uncheckAddOn(props.title))
        } else {
            dispatch(checkAddOn(props.title))
        }
      }

    return (
        <div className={`checkbox-container ${checkedClass}`}>
             <input className='inputCheck' type="checkbox" onChange={handleCheckbox} checked={props.checked}/>
             <div className='checkbox-titles-wrapper'>
                <h1 className='checkbox-title'>{props.title}</h1>
                <h2 className='checkbox-subtitle'>{props.subtitle}</h2>
             </div>
             <h2 className='checkbox-pricing'>{price}</h2>      
        </div>
    )
}

export default CheckBox