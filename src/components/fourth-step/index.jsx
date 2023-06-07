import React from 'react'
import Heading from '../heading/heading'
import NavigationButtons from '../navigation-buttons/navigationButtons'
import { useSelector } from 'react-redux';

function priceFormat(num, mode, addon) {
    let plan = mode === 'monthly' ? 'mo' : 'yr'
    let plus = addon === true ? '+' : ''
    let value = `${plus}$${num}/${plan}`
}

function FourthStep() {
    let finalState = useSelector((state) => {return state.final})
    let plan = {
        name: `${finalState.plan.name} (${finalState.payment.mode})` ,
        pricing: finalState.payment.mode === 'monthly' ? finalState.plan.price.pricingMonthly : finalState.plan.price.pricingYearly
    }

    function generateAddons(array) {

        return array.filter((each) => {
            if (each.checked === true) {
                return each
            }
        }).map((each) => {
            return (
                <div className='summaryAddOn'>
                    <h2 className='summaryAddOnText'>{each.title}</h2><h2 className='summaryAddOnText'>{each.pricing.monthly}</h2>
                </div>
            )
        })
    }

    return (
        <div>
            <Heading title='Finishing up' subtitle='Double-check everything looks OK before confirming.' />

            <div className='summaryContainer'>
                <div className='summaryPlanInfo'>
                    <h2 className='summaryPlanText'>{plan.name}</h2><h2 className='summaryPlanText'>{plan.pricing}</h2>
                </div>
                <hr />
                {generateAddons(finalState.addOns)}
            </div>

            <NavigationButtons />
            
        </div>
    )
}

export default FourthStep