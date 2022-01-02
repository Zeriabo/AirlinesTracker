import { configureStore, Store } from '@reduxjs/toolkit';
import { getDefaultNormalizer } from '@testing-library/react';
import counterReducer from '../features/counter/counterSlice';
import {routesApi} from '../features/popularRoutes/popularRoutes';
import{cheapestTickets} from '../features/popularRoutes/popularRoutes';

export const store = configureStore({
    reducer: { 
        counter : counterReducer,
        [routesApi.reducerPath]:routesApi.reducer,
        [cheapestTickets.reducerPath]:cheapestTickets.reducer
        
    },

    middleware: (getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(routesApi.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState  = ReturnType<typeof store.getState>;



