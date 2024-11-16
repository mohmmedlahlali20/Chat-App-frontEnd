import axios from "../axios/axios";

interface LoginData {
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

const authService = {login};

export default authService;