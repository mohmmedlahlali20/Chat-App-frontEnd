import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllFriends } from '../../../services/friendApi';


interface Friend {
    _id: string;
    name: string;
}


interface FriendState {
    friends: Friend[];
    loading: boolean;
    error: string | null;
}


const initialState: FriendState = {
    friends: [],
    loading: false,
    error: null,
};


export const getFriends = createAsyncThunk('friends/getAll', async () => {
    const friends = await getAllFriends();
    return friends;
});


const friendSlice = createSlice({

    name: 'friends',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getFriends.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getFriends.fulfilled, (state, action) => {
            state.loading = false;
            state.friends = action.payload;
        })
        .addCase(getFriends.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed To Fetch All Friends';
        });
    },
});

export default friendSlice.reducer;