import axios from "../axios/axios";

interface LoginData {
    email: string;
    password: string;
}

interface RegisterData {
    name: string;
    email: string;
    password: string;
}

export const login = async (loginData: LoginData) => {
    try {
        const response = await axios.post('auth/login', loginData);
        return response.data
    } catch(error) {
        throw error;
    }
};


export const register = async (registerData: RegisterData) => {
    try {
        const response = await axios.post('auth/register', registerData);
        return response.data;
    } catch (error: any) {
        throw new Error (error.response?.data?.message || 'Failed Create Account');
    }
}

const authService = {login, register};

export default authService;