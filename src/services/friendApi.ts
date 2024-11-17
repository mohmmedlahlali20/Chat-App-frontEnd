import axios from "../axios/axios";

export const getAllFriends = async (userId: string) => {
    const response = await axios.get(`/user/getAll/${userId}`);
    return response.data;
}   