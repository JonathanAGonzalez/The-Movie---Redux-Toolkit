import {
  errorFetchMovieDetail,
  startFetchMovieDetail,
  startFetchActorsDetail,
  successFetchMovieDetail,
  successFetchActorsDetail,
  errorFetchActorsDetail,
} from '../actions/moviesActions';

const initialState = {
  detail: null,
  isFetchingMovieDetail: false,
  isFetchingActorsDetail: false,
  isLoading: false,
  isSuccess: false,
  errorFetchMovieDetail: null,
  errorFetchActorsDetail: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case startFetchMovieDetail.toString():
      return { ...state, isFetchingMovieDetail: true, isLoading: true };

    //Movie Detail
    case successFetchMovieDetail.toString():
      return {
        ...state,
        isSuccess: true,
        isFetchingMovieDetail: false,
        isLoading: false,
        ...action.payload,
      };

    case errorFetchMovieDetail.toString():
      return {
        ...state,
        isFetchingMovieDetail: false,
        isLoading: false,
        isSuccess: false,
        errorFetchMovieDetail: action.payload.err,
      };

    //Actors detail
    case startFetchActorsDetail.toString():
      return {
        ...state,
        isFetchingActorsDetail: true,
        isLoading: true,
      };

    case successFetchActorsDetail.toString():
      return {
        ...state,
        isSuccess: true,
        isFetchingActorsDetail: false,
        isLoading: false,
        ...action.payload,
      };

    case errorFetchActorsDetail.toString():
      return {
        ...state,
        isFetchingActorsDetail: false,
        isLoading: false,
        isSuccess: false,
        error: action.payload.err,
      };

    default:
      return state;
  }
};

export default reducer;
