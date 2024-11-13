import { configureStore } from '@reduxjs/toolkit';
import channelReducer from '../Slices/Channel/ChannelSlice';
import { channelApi } from '../../services/channelApi.tsx';
import { setupListeners } from '@reduxjs/toolkit/query';
import usersReducer from '../Slices/users/userSlice';
import { userApi } from '../../services/userApi';
const store = configureStore({
    reducer: {
        channel: channelReducer,
        users: usersReducer,
        [channelApi.reducerPath]: channelApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(channelApi.middleware,userApi.middleware),

});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
