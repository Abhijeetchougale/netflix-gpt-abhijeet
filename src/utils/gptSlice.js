
import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false // Corrected typo from 'showGptSerach' to 'showGptSearch'
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;


