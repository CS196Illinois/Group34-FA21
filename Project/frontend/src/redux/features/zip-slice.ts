import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface zipState {
    value : string
}

const initialState: zipState = {
    value : 'Zip Code'
}

const zipSlice = createSlice({
    name: 'zipCode',
    initialState,
    reducers : {
        update(state, action: PayloadAction<string>) {
            state.value = action.payload
        }
    }
})

export const { update } = zipSlice.actions
export default zipSlice.reducer