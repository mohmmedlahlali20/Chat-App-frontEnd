import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const messageApi = createApi({
    reducerPath: 'messageApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_NEST_API_URL }),
    endpoints: (builder) => ({
        getMessages: builder.query<any, string | null>({
            query: (channelId) => (channelId ? `/messages/${channelId}/messages` : ''),
        }),
    }),
});
export const { useGetMessagesQuery } = messageApi;
