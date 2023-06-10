import { configureStore } from '@reduxjs/toolkit'
import stepReducer from './stepSlice.js'
import finalReducer from './finalSlice.js'
import validReducer from './validSlice.js'
import userInfoReducer from './userInfoSlice.js'

const store = configureStore({
  reducer: {
    step: stepReducer,
    final: finalReducer,
    valid: validReducer,
    userInfo: userInfoReducer
  }
})

export default store