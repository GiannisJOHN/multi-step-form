import React from 'react'
import Heading from '../heading/heading'
import NavigationButtons from '../navigation-buttons/navigationButtons'
import CheckBox from './check-box'
import { useSelector } from 'react-redux';


function ThirdStep() {
    let addonsInfo = useSelector((state) => {return state.final.addOns})

    
    function generateCheckboxes(array) {
    
        return array.map((each) => {
            return <CheckBox title={each.title} subtitle={each.subtitle} pricing={each.pricing} checked={each.checked}/>
        })
    
    }

    return (
        <div>
            <Heading title='Pick add-ons' subtitle='Add-ons help enhance your gaming experience.' />
            <div>
                {generateCheckboxes(addonsInfo)}
            </div>
            <NavigationButtons />
        </div>
    )
}

export default ThirdStep