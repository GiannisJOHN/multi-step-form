import { createSlice } from '@reduxjs/toolkit'

const validSlice = createSlice({
  name: 'valid',
  initialState: false,
  reducers: {
    validate: (state, action) => {
        return state = action.payload
    },
    initiate: (state, action) => {
        return state = false
    }
}

})

export const { validate, initiate } = validSlice.actions

export default validSlice.reducer