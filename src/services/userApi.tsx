import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_NEST_API_URL }),
    endpoints: (builder) => ({
        getUsers: builder.query<any[], void>({
            query: () => `user/users`,
        }),
    }),
});

export const { useGetUsersQuery } = userApi;
