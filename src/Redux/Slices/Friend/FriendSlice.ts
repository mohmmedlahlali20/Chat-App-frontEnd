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


export const getFriends = createAsyncThunk('friends/getAll', async (_, thunkAPI) => {
    try {
        // Get the user object from localStorage
        const user = JSON.parse(localStorage.getItem('user') || '{}'); // Parse the string into an object
        
        if (!user || !user._id) {
            throw new Error('User data or userId not found in localStorage');
        }
        
        const friends = await getAllFriends(user._id); // Now using user._id to fetch friends
        return friends;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message || 'Failed to fetch friends');
    }
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