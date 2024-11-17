import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../../services/authApi";



interface RegisterState {
    user: any | null;
    isLoading : boolean;
    error: string | null;
}

const initialState: RegisterState = {
    user: null,
    isLoading: false,
    error: null,
};


export const register = createAsyncThunk(
    'auth/register',
    async (registerData: { name: string; email: string; password: string}, {rejectWithValue}) => {
        try {
            const user = await authService.register(registerData);
            return user;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed To Create Account');
        }
    }
);


const registerSlice = createSlice ({
    name: 'register',
    initialState,
    reducers : {
        resetState: (state) => {
            state.user = null;
            state.isLoading = false;
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state)  => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        })
        .addCase(register.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const { resetState } = registerSlice.actions;
export default registerSlice.reducer