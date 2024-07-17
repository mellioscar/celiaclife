import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../databases/realtimeDatabase';

export const firebaseApi = createApi({
  reducerPath: 'firebaseApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      async queryFn() {
        try {
          const response = await fetch(`${baseUrl}/recipes.json`);
          const data = await response.json();
          return { data: data ? Object.values(data) : [] };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
    addRecipe: builder.mutation({
      async queryFn(newRecipe) {
        try {
          const response = await fetch(`${baseUrl}/recipes.json`, {
            method: 'POST',
            body: JSON.stringify(newRecipe),
          });
          const data = await response.json();
          return { data };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useGetRecipesQuery, useAddRecipeMutation } = firebaseApi;
