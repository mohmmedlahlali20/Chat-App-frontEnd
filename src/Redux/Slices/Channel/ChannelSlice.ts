import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Channel {
    _id: string;
    Title: string;
    members: string[];
    type: string;
    badWords: string[];
}

interface channelState {
    channels: Channel[];
}

const initialState: channelState = {
    channels: [],
};

const channelSlice = createSlice({
    name: 'channel',
    initialState,
    reducers: {

        getChannel : (state , action: PayloadAction<Channel[]>) => {
            state.channels = action.payload;
        },
        addChannel: (state, action: PayloadAction<Channel>) => {
            state.channels.push(action.payload);
        },
        removeChannel: (state, action: PayloadAction<string>) => {
            const index = state.channels.findIndex((channel) => channel._id === action.payload);
            if (index !== -1) {
                state.channels.splice(index, 1);
            }
        },
        updateChannel: (state, action: PayloadAction<Channel>) => {
            const index = state.channels.findIndex((channel) => channel._id === action.payload._id);
            if (index !== -1) {
                state.channels[index] = action.payload;
            }
        },
    },
});

export const { addChannel, removeChannel, updateChannel , getChannel } = channelSlice.actions;
export default channelSlice.reducer;
