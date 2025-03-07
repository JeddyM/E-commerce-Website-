//a Redux slice using the Redux Toolkit to manage authentication state

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo'))
    : null
}

//The reducers are functions that modify the slice's state based on the dispatched actions.
//setcredentials updates the user info in the redux state and saves it in local storage
const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials:(state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo' ,JSON.stringify(action.payload))
        },

        logout:(state, action) =>{
            state.userInfo = null;
            localStorage.removeItem('userInfo')
        }
    }  
})

export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;
