import { configureStore } from '@reduxjs/toolkit'
import stepReducer from './stepSlice.js'
import finalReducer from './finalSlice.js'

const store = configureStore({
  reducer: {
    step: stepReducer,
    final: finalReducer
  }
})

export default store