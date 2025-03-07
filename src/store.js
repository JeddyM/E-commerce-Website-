import {configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import { apiSlice } from './slices/apiSlice.js';

 const store = configureStore(
    {
        reducer:{
            auth:authReducer,
            [apiSlice.reducerPath ]:apiSlice.reducer,
        },
        middleware:(getdefaultMiddleware) => getdefaultMiddleware().concat(apiSlice.middleware),
        devTools:true //enables Redux DevTools for debugging state changes.
    }
 );


 export default store;