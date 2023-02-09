import { configureStore } from "@reduxjs/toolkit";
import { climateReducer } from './reducers/climateReducer';

export const store = configureStore({
    reducer: {
        climate: climateReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch