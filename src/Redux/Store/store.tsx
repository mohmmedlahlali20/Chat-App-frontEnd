
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        // Define your reducers here
    }

})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch


export default store