import { configureStore } from '@reduxjs/toolkit';
import CareerReducer from 'slices/chooseCareerSlice'

export const store = configureStore({
    reducer: {
        careerPath: CareerReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;