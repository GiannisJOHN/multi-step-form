import { createSlice } from '@reduxjs/toolkit'

const stepSlice = createSlice({
  name: 'step',
  initialState: 1,
  reducers: {
    nextStep: (state, action) => {
        if (state < 5) {
            return state + 1
          }
          return state
    },
    previousStep: (state, action) => {
        if (state > 1) {
            return state - 1
          }
          return state
    }
  }
});

export const { nextStep, previousStep } = stepSlice.actions

export default stepSlice.reducer