import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, previousStep } from '../../global-state/stepSlice';
import { initiate } from '../../global-state/validSlice'

function NavigationButtons() {
    


    let valid = useSelector((state) => {
        return state.valid
    })

    let step = useSelector((state) => {
        return state.step
    })
    const dispatch = useDispatch()

    let display = step === 1
    ? 'back-button-off'
    : ''

    let classButton =   step === 4 ? 'next-button confirm-bg-color' : 'next-button'

    return (
        <div className='navigation-buttons-container'>
            <button className={`back-button ${display}`} onClick={() => {
                if (step === 2) {
                    dispatch(initiate())
                }
                dispatch(previousStep())
            }}>
                Go Back
            </button>

            <button className={classButton} type='submit' onClick={() => {
                    if(valid === true) {
                        dispatch(nextStep())
                    }
            }}>
                {step === 4 ? 'Confirm' : 'Next Step'}
            </button>
        </div>
    )
}

export default NavigationButtons