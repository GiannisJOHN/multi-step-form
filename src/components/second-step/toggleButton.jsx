import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updatePaymentMode } from '../../global-state/finalSlice';

function ToggleButton() {
    
    const paymentMode = useSelector((state) => state.final.payment.mode)

    let toggleCircleClass = paymentMode === 'monthly' ? 'toggle-circle' : 'toggle-circle goRight'
    let leftSpan = paymentMode === 'monthly' ? 'toggle-active' : 'toggle-inactive'
    let rightSpan = paymentMode === 'yearly' ? 'toggle-active' : 'toggle-inactive'
    
    let dispatch = useDispatch()

    function onToggleButtonClick() {
        let mode = paymentMode === 'monthly' ? 'yearly' : 'monthly'
        dispatch(updatePaymentMode(mode))
    }

    return (
        <div className='toggle-button-container'>
            <span className={`text-style-body-medium ${leftSpan}`}>Monthly</span>
            <button className='toggle-button' onClick={onToggleButtonClick}>
                <div className={toggleCircleClass} />
            </button>
            <span className={`text-style-body-medium ${rightSpan}`}>Yearly</span>
        </div>
    )
}

export default ToggleButton