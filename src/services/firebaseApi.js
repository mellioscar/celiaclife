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
          return { data: data || [] };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
    getRecipesByCategory: builder.query({
      async queryFn({ category, subcategory }) {
        try {
          const url = subcategory 
            ? `${baseUrl}/recipies/${category}/${subcategory}.json`
            : `${baseUrl}/recipies/${category}.json`;
          const response = await fetch(url);
          const data = await response.json();
          return { data: data ? Object.values(data).flat() : [] };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
    getStores: builder.query({
      async queryFn() {
        try {
          const response = await fetch(`${baseUrl}/tiendas.json`);
          const data = await response.json();
          return { data: data || [] };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
    updateUserProfile: builder.mutation({
      async queryFn({ email, profileData }) {
        try {
          const emailKey = email.replace('.', '_');
          const response = await fetch(`${baseUrl}/users/${emailKey}.json`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(profileData)
          });
          const data = await response.json();
          if (response.ok) {
            return { data };
          } else {
            return { error: data.error };
          }
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useGetTipsQuery, useGetRecipesByCategoryQuery, useGetStoresQuery, useUpdateUserProfileMutation } = firebaseApi;
