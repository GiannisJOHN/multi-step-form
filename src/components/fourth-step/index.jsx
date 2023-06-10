import React from 'react'
import Heading from '../heading/heading'
import NavigationButtons from '../navigation-buttons/navigationButtons'
import {useSelector} from 'react-redux';
import { filterAddons } from './utils';
import priceFormat from '../../utils/price-format';
import sum from '../../utils/sum';

function FourthStep() {

    let finalState = useSelector((state) => {
        return state.final
    })
    let mode = finalState.payment.mode
    let plan = {
        name: `${finalState.plan.name} (${finalState.payment.mode})`,
        pricing: priceFormat(finalState.plan.price[mode], mode)
    }

    function renderAddons(array) {
        return array.map((each) => {
            return (
                <div className='summarySecondary'>
                    <h2 className='summarySecondaryText'>{each.title}</h2>
                    <h2 className='summarySecondaryText'>{priceFormat(each.pricing[mode], mode, '+')}</h2>
                </div>
            )
        })
    }

    return (
        <div>
            <Heading title='Finishing up' subtitle='Double-check everything looks OK before confirming.'/>
            <div className='summaryContainer summary-padding'>
                <div className='summaryPlanInfo'>
                    <h2 className='summaryPlanText'>{plan.name}</h2>
                    <h2 className='summaryPlanText'>{plan.pricing}</h2>
                </div>
                <hr/>
                {renderAddons(filterAddons(finalState.addOns).array)}
            </div>
            <div className='summarySecondary summary-padding'>
                <h2 className='summarySecondaryText'>{`Total (${mode})`}</h2>
                <h2 className='summarySecondaryText final-price-color'>{
                    priceFormat(
                        sum(finalState.plan.price[mode], filterAddons(finalState.addOns, mode).price),
                        mode
                    )
                }</h2>
            </div>
            <NavigationButtons/>
        </div>
    )
}

export default FourthStep