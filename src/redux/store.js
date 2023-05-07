import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {logout,loginSuccess} from "./authSlice"

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
onAuthStateChanged(auth,(user)=>{
  if(user){
    store.dispatch(loginSuccess())
  }
  else{
    store.dispatch(logout())
  }
})
export default store;