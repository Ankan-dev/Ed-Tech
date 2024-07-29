import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const profileSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      addUser: (state,action) => {
        console.log(action.payload)
        state.user=action.payload
        console.log(state.user);
      }
    },
  })
  
  
  export const { addUser } = profileSlice.actions
  
  export default profileSlice.reducer