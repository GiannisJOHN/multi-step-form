import { createSlice } from '@reduxjs/toolkit'

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    name: '',
    email: '',
    tel: ''
  },
  reducers: {
    updateInfo: (state, action) => {
        let [name, value] = action.payload
       state[name] = value
    }
}
})

export const { validate, updateInfo } = userInfoSlice.actions

export default userInfoSlice.reducer