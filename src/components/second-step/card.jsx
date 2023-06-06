import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updatePlan } from '../../global-state/finalSlice';


function Card(props) {
    let activeState = useSelector((state) => {return state.final})
    let dispatch = useDispatch()

    function handleUpdatePlan() {
        let updatedPlan = {
          name: props.name,
          price: props.pricing
        }
    
        dispatch(updatePlan(updatedPlan))
      }

      
      let activeCard = activeState.plan.name === props.name ?
      'plan-card plan-card-selected' : 'plan-card'
      
      let price = activeState.payment.mode === 'monthly' ? '$' + props.pricing.pricingMonthly + '/mo' : '$' + props.pricing.pricingYearly + '/yr'
      
      let yearInfo = activeState.payment.mode === 'monthly' ? '' : '2 months free'

    return (
        <div className={activeCard}
            onClick={handleUpdatePlan}
        >
            <img src={props.img} alt="" />
            <div>
                <h1 className='plan-card-title'>{props.name}</h1>
                <h2 className='plan-card-subtitle'>{price}</h2>
                <h2 className='plan-card-subtitle second-subtitle'>{yearInfo}</h2>
            </div>
        </div>
    )
}

export default Card