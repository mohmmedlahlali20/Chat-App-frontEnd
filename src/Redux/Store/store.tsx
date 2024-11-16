import {configureStore} from '@reduxjs/toolkit';
import channelReducer from '../Slices/Channel/ChannelSlice';
import friendReducer from '../Slices/Friend/FriendSlice.ts';
import {channelApi} from '../../services/channelApi.tsx';
import {setupListeners} from '@reduxjs/toolkit/query';
import usersReducer from '../Slices/users/userSlice';
import {userApi} from '../../services/userApi';
import messageSlice from "../Slices/messages/MessageSlice.ts";
import {messageApi} from "../../services/messageApi.tsx";


const store = configureStore({
    reducer: {
        channel: channelReducer,
        friends: friendReducer,
        users: usersReducer,
        messages: messageSlice,
        [channelApi.reducerPath]: channelApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [messageApi.reducerPath]: messageApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(
                channelApi.middleware,
                userApi.middleware,
                messageApi.middleware
            ),

});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
