import {configureStore} from '@reduxjs/toolkit'
import zipSlice from '../features/zip-slice'

export const store = configureStore ({
    reducer: {
        zip : zipSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>