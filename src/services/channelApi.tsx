import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const channelApi = createApi({
    reducerPath: 'channelApi',
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_NEST_API_URL}),
    endpoints: (builder) => ({
        getChannels: builder.query<any, void>({
            query: (name) => `/channels/${name}`,
        }),
    }),
});

export const {useGetChannelsQuery} = channelApi;
