import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  plan: {
    name: 'Arcade',
    price: {
      pricingMonthly: 9,
      pricingYearly: 90
  },
  },
  payment: {
    mode: 'monthly',
  },
  addOns: [
    {
        title: 'Online service',
        subtitle: 'Access to multiplayer games',
        pricing: {
            monthly: 1,
            yearly: 10
        },
        checked: true
    },
    {
        title: 'Larger storage',
        subtitle: 'Extra 1TB of cloud save',
        pricing: {
            monthly: 2,
            yearly: 20
        },
        checked: false
    },
    {
        title: 'Customizable profile',
        subtitle: 'Custom theme on your profile',
        pricing: {
            monthly: 2,
            yearly: 20
        },
        checked: false
    }
]
}

const finalSlice = createSlice({
  name: 'final',
  initialState,
  reducers: {
    updatePlan: (state, action) => {
      state.plan = action.payload
    },
    updatePaymentMode: (state, action) => {
      state.payment.mode = action.payload
    },
    checkAddOn: (state, action) => {
      state.addOns.forEach((each) => {
        if (each.title === action.payload) {
          each.checked = true
        }
      })
    },
    uncheckAddOn: (state, action) => {
      state.addOns.forEach((each) => {
        if (each.title === action.payload) {
          each.checked = false
        }
      })
    }
  }
})

export const { updatePlan, updatePaymentMode, checkAddOn, uncheckAddOn } = finalSlice.actions

export default finalSlice.reducer
