import { configureStore } from '@reduxjs/toolkit';

import { moviesApi } from '../redux/api/movies';
import moviesReducers from '../redux/reducers/moviesReducers';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    moviesReducers,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), moviesApi.middleware];
  },
});
