import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  detail: null,
  isFetchingMovieDetail: false,
  isFetchingActorsDetail: false,
  isLoading: false,
  isSuccess: false,
  errorFetchMovieDetail: null,
  errorFetchActorsDetail: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    errorFetchMovieDetail(state, action) {
      state.isLoading = false;
      state.isFetchingMovieDetail = false;
      state.isSuccess = false;
      state.errorFetchMovieDetail = action.payload.err;
    },
    startFetchMovieDetail(state, action) {
      state.isLoading = true;
      state.isFetchingMovieDetail = true;
      state.isSuccess = false;
      state.errorFetchMovieDetail = null;
    },
    successFetchMovieDetail(state, action) {
      state.isLoading = false;
      state.isFetchingMovieDetail = false;
      state.isSuccess = true;
      state.errorFetchMovieDetail = null;
      state.detail = action.payload;
    },
  },
});

const {
  startFetchMovieDetail,
  errorFetchMovieDetail,
  successFetchMovieDetail,
} = moviesSlice.actions;

const { reducer } = moviesSlice;

export {
  startFetchMovieDetail,
  errorFetchMovieDetail,
  successFetchMovieDetail,
};

export default reducer;
