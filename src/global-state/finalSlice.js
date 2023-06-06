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
  addOns: [],
};

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
    addAddOn: (state, action) => {
      state.addOns.push(action.payload)
    }
  }
})

export const { updatePlan, updatePaymentMode, addAddOn } = finalSlice.actions

export default finalSlice.reducer
