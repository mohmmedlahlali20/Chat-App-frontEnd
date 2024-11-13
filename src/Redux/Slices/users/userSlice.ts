import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    _id: string;
    name: string;
}

interface UsersState {
    allUsers: User[];
}

const initialState: UsersState = {
    allUsers: [],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setAllUsers: (state, action: PayloadAction<User[]>) => {
            state.allUsers = action.payload;
        },
    },
});

export const { setAllUsers } = usersSlice.actions;
export default usersSlice.reducer;
