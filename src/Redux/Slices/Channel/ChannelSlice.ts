import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Channel {
    _id: string;
    title: string;
    members: string[];
    type: string;
    badWords: string[];
}

interface ChannelState {
    channels: Channel[];
}

const initialState: ChannelState = {
    channels: [],
};

const channelSlice = createSlice({
    name: 'channel',
    initialState,
    reducers: {
        getChannel: (state, action: PayloadAction<Channel[]>) => {
            state.channels = action.payload;
        },

        addBadWords: (state, action: PayloadAction<{ channelId: string; badWords: string[] }>) => {
            const { channelId, badWords } = action.payload;
            const channel = state.channels.find((channel) => channel._id === channelId);
            if (channel) {
                badWords.forEach((word) => {
                    if (!channel.badWords.includes(word)) {
                        channel.badWords.push(word);
                    }
                });
            }
        },

        removeBadWords: (state, action: PayloadAction<{ channelId: string; badWords: string[] }>) => {
            const { channelId, badWords } = action.payload;
            const channel = state.channels.find((channel) => channel._id === channelId);
            if (channel) {
                channel.badWords = channel.badWords.filter(word => !badWords.includes(word));
            }
        },

        addChannel: (state, action: PayloadAction<Channel>) => {
            state.channels.push(action.payload);
        },

        filterChannelsByUserId: (state, action: PayloadAction<{ userId: string }>) => {
            const { userId } = action.payload;
            state.channels = state.channels.filter((channel) => channel.members.includes(userId));
        },

        setChannels: (state, action: PayloadAction<Channel[]>) => {
            state.channels = action.payload;
        },

        addUserToChannel: (state, action: PayloadAction<{ channelId: string; userId: string }>) => {
            const { channelId, userId } = action.payload;
            const channel = state.channels.find((channel) => channel._id === channelId);
            if (channel && !channel.members.includes(userId)) {
                channel.members.push(userId);
            }
        },

        removeChannel: (state, action: PayloadAction<string>) => {
            state.channels = state.channels.filter((channel) => channel._id !== action.payload);
        },

        removeUserFromChannel: (state, action: PayloadAction<{ channelId: string; userId: string }>) => {
            const { channelId, userId } = action.payload;
            const channel = state.channels.find((channel) => channel._id === channelId);
            if (channel) {
                channel.members = channel.members.filter((member) => member !== userId);
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

export const {
    addChannel,
    removeChannel,
    updateChannel,
    setChannels,
    removeUserFromChannel,
    addUserToChannel,
    addBadWords,
    removeBadWords,
    filterChannelsByUserId,
    getChannel
} = channelSlice.actions;

export default channelSlice.reducer;
