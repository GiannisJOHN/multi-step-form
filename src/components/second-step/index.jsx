import React from 'react'
import Heading from '../heading/heading'
import { cardInfo } from './cards-info'
import Card from './card'
import ToggleButton from './toggleButton'
import NavigationButtons from '../navigation-buttons/navigationButtons'

function renderCards(array, option) {
    return array.map((each) => {
        let price = option === 'monthly' ? '$' + each.pricingMonthly + '/mo' : '$' + each.pricingYearly + 'yr'
        let info = option === 'monthly' ? '' : each.yearlyInfo 

        return <Card name={each.name} pricing={price} yearlyInfo={info} img={each.img} />
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