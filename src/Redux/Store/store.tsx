import { configureStore } from '@reduxjs/toolkit';
import channelReducer from '../Slices/Channel/ChannelSlice';
import { channelApi } from '../../services/channelApi.tsx';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
    reducer: {
        channel: channelReducer,
        [channelApi.reducerPath]: channelApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(channelApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
