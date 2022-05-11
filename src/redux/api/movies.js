import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const KEY_API = '3d6b6715bb8244073a9d72f1c2b5d9fc';
export const LENGUAGE = 'es-ES';
export const BASE_URL = 'https://api.themoviedb.org/3';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    fetchMovies: builder.query({
      query: (title) => ({
        url: `search/movie?api_key=${KEY_API}&language=${LENGUAGE}&page=1&include_adult=false&query=${title}`,
        method: 'GET',
      }),
    }),
    fetchDetailMovie: builder.query({
      query: (movieID) => ({
        url: `movie/${movieID}?api_key=${KEY_API}&language=${LENGUAGE}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useFetchMoviesQuery, useFetchDetailMovieQuery } = moviesApi;
