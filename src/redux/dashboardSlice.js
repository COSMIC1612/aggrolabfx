import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
    name:'dash',
    initialState:{
        dashIsOpen:false,
    },
    reducers:{
        openDash:(state)=>{
            state.dashIsOpen=true;
        },
        closeDash:(state)=>{
            state.dashIsOpen=false;
        },
    }
})

export const {openDash,closeDash} = dashboardSlice.actions;
export default dashboardSlice.reducer
