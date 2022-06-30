import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CarrerState {
    career: {careerPath: string, experience: string, color: string, template: string};
}

const initialState: CarrerState = {
    career: {
        careerPath: '',
        experience: '',
        color: '',
        template: ''
    }
};

export const chooseCareerSlice = createSlice({
    name: 'chooseCareer',
    initialState,
    reducers: {
        chooseCareer: (state, action: PayloadAction<{careerPath: string, experience: string, color: string, template: string}>) => {
            state.career = action.payload
        }
    }
});

export const { chooseCareer } = chooseCareerSlice.actions;
export const selectCareer = (state) => state.career;
export default chooseCareerSlice.reducer;