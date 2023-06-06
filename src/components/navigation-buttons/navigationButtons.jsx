import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, previousStep } from '../../global-state/stepSlice';

function NavigationButtons(props) {
    const dispatch = useDispatch()

    return (
        <div className='navigation-buttons-container'>
            <button className='back-button' onClick={() => {
                dispatch(previousStep())
            }}>Go Back</button>
            <button className='next-button' onClick={() => {
                {dispatch(nextStep())}
            }}>Next Step</button>
        </div>
    )
}

export default NavigationButtons