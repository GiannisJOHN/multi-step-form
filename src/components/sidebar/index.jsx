import React from 'react'
import ovals from '../../assets/ovals.svg'
import Step from '../step-item'



const stepItemText = [
    {
        title: 'Your Info',
        subtitle: 'Step 1'
    },
    {
        title: 'Select Plan',
        subtitle: 'Step 2'
    },
    {
        title: 'Add-ons',
        subtitle: 'Step 3'
    },
    {
        title: 'Summary',
        subtitle: 'Step 4'
    }
]

function renderSteps(arrayText) {
    return arrayText.map((each, index) => {
        return (
            <li className='sidebar-item'>
                <Step number={index + 1} title={each.title} subtitle={each.subtitle}/>
            </li>
        )
    })
}

function Sidebar() {
    return (
        <aside className='sidebar'>
            <ul className='sidebar-list'>{renderSteps(stepItemText)}</ul>
            <img className='ovals' src={ovals} alt="" />
        </aside>
    )
}

export default Sidebar