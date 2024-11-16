import axios from "../axios/axios";

export const getAllFriends = async () => {
    const response = await axios.get('/user/getAll');
    return response.data;
}