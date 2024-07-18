// src/services/firebaseApi.js
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../databases/realtimeDatabase';

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getTips: builder.query({
      async queryFn() {
        try {
          const response = await fetch(`${baseUrl}/tips.json`);
          const data = await response.json();
          return { data: data ? Object.values(data) : [] };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useGetTipsQuery } = firebaseApi;
