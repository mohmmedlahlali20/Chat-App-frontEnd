import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../../services/authApi";


interface LoginState {
    user: any | null;
    isLoading : boolean;
    error: string | null;
}

const initialState: LoginState = {
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    isLoading: false,
    error: null,
}


export const login = createAsyncThunk<
    any, 
    { email: string; password: string }, 
    { rejectValue: string }
    >(    
    'auth/login', 
    async (loginData, {rejectWithValue}) => {
    try {
        const user = await authService.login(loginData);
        return user;
    } catch (error: any) {
        return rejectWithValue(error.message || 'Failed to log in');
    }
}
);

const loginSlice = createSlice ({
    name: 'login',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));

        })
        .addCase(login.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer