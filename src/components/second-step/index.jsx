import React from 'react'
import Heading from '../heading/heading'
import { cardInfo } from './cards-info'
import Card from './card'
import ToggleButton from './toggleButton'
import NavigationButtons from '../navigation-buttons/navigationButtons'

function renderCards(array) {
    return array.map((each) => {
        return <Card name={each.name} pricing={each.price} img={each.img} />
    })
}


function SecondStep() {
    return (
        <div>
            <Heading title='Select your plan' subtitle='You have the option of monthly or yearly billing.'/>
            <div className='plan-cards'>
                {renderCards(cardInfo, 'monthly')}
            </div>
            <ToggleButton />
            <NavigationButtons />
        </div>
    )
}

export default SecondStep