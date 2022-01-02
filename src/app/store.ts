import { configureStore, Store } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cheapestFlightsReducer from '../features/cheapestRoutes/cheapestSlice';
import {routesApi} from '../features/popularRoutes/popularRoutes';
import{cheapestTickets} from '../features/popularRoutes/popularRoutes';
import showHideRoutesDistanceState from '../features/showHideComponents/showHideRoutesDistanceSlice'
export const store = configureStore({
    reducer: { 
        counter : counterReducer,
        showHideCheapest: showHideRoutesDistanceState,
        cheapestFlights:cheapestFlightsReducer,
        [routesApi.reducerPath]:routesApi.reducer,
        [cheapestTickets.reducerPath]:cheapestTickets.reducer,
       
        
    },

    middleware: (getDefaultMiddleware) =>{ 
        return getDefaultMiddleware().concat(routesApi.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState  = ReturnType<typeof store.getState>;



