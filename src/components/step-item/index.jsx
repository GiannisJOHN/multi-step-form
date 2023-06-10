import React from 'react'
import { useSelector } from 'react-redux'

function generateClassForRounded(state, reactProp) {
    if (state === reactProp) {
        return 'step-rounded step-active'
    } else {
        return 'step-rounded'
    }
}

function Step(props) {
    let stateStep = useSelector((state) => { return state.step})

    return (
        <div className='step'>
            <div className={generateClassForRounded(stateStep, props.number)}>{props.number}</div>
            <div className='step-title-container'>
                <h3 className='step-subtitle text-style-body-small'>{props.subtitle}</h3>
                <h1 className='text-style-body-medium'>{props.title}</h1>
            </div>
        </div>
    )
}

export default Step