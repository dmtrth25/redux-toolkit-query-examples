import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRecipe } from '../../types/recipe.types'

const API_URL = 'http://localhost:4000/recipes'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Recipe'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: builder => ({
    getRecipes: builder.query<IRecipe[], null>({
      query: () => '/',
      providesTags: () => [
        {
          type: 'Recipe',
        },
      ],
    }),
  }),
})

export const { useGetRecipesQuery } = api
