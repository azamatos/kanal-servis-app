import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface AuthState {
  loggedIn: boolean
}

const initialState: AuthState = {
  loggedIn: false 
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload
    }
  }
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer