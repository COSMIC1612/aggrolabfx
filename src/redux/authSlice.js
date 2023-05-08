import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user:null,
    isLoggedIn: false,
    loading:false,
    error:null,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  }
});

export const { loginStart,loginSuccess,loginFailure, logout,rememberMe } = authSlice.actions;
export default authSlice.reducer;
