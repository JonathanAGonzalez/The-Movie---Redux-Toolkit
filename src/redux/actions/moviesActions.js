import { createAction } from '@reduxjs/toolkit';
import { BASE_URL, KEY_API, LENGUAGE } from '../api/movies';

//Detail movie
export const startFetchMovieDetail = createAction('START_FETCH_MOVIE_DETAIL');
export const successFetchMovieDetail = createAction(
  'SUCCESS_FETCH_MOVIE_DETAIL'
);
export const errorFetchMovieDetail = createAction('ERROR_FETCH_MOVIE_DETAIL');

//Actors movie
export const startFetchActorsDetail = createAction('START_FETCH_ACTORS_DETAIL');
export const successFetchActorsDetail = createAction(
  'SUCCESS_FETCH_ACTOR_DETAIL'
);
export const errorFetchActorsDetail = createAction('ERROR_FETCH_MOVIE_DETAIL');

//Fetch Movie Detail
export const fetchMovieDetail = (movieID) => async (dispatch) => {
  try {
    //iniciando la llamada
    dispatch(startFetchMovieDetail());

    const detailMovieReponse = await fetch(
      `${BASE_URL}/movie/${movieID}?api_key=${KEY_API}&language=${LENGUAGE}`
    );

    const detail = await detailMovieReponse.json();

    //Exitoso
    dispatch(successFetchMovieDetail({ detail }));
  } catch (err) {
    dispatch(errorFetchMovieDetail({ err }));
  }
};

//Fetch Actors movie
export const fetchActorsDetail = (movieID) => async (dispatch) => {
  try {
    dispatch(startFetchActorsDetail());

    const actorsMovieReponse = await fetch(
      `${BASE_URL}/movie/${movieID}/credits?api_key=${KEY_API}`
    );

    const actors = await actorsMovieReponse.json();

    //Exitoso
    dispatch(successFetchActorsDetail({ actors: actors.cast }));
  } catch (err) {
    dispatch(errorFetchActorsDetail(err));
  }
};
