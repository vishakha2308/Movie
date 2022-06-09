import axios from "axios";
import API from "../src/API/API";
import { TMDB_API_KEY, BASE_URL } from '../src/API/Key'
export const GET_MOVIES = 'GET_MOVIES';
export const ADD_FAVORITE_MOVIES = 'ADD_BOOKMARK_MOVIES';
export const REMOVE_FAVORITE_MOVIES = 'REMOVE_FAVORITE_MOVIES';
export const GET_TVSERIES = 'GET_TVSERIES';
export const ADD_FAVORITE_TVSERIES = 'ADD_BOOKMARK_TVSERIES';
export const REMOVE_FAVORITE_TVSERIES = 'REMOVE_FAVORITE_TVSERIES';
export const getMovies = () => {
    try {
        return async dispatch => {
            const paramObj = {
                api_key: `${TMDB_API_KEY}`,
                    language: 'en-US',
                    page: 1
            }
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`,
            {
                params: paramObj,
            },);
            console.log('moviesResponse', response)
            if (response.data) {
                dispatch({
                    type: GET_MOVIES,
                    payload: response.data.results
                });
            } else {
                console.log('err',response.error);
            }
        };
    } catch (error) {
        // Add custom logic to handle errors
        console.log(error);
    }
};
export const getTVSeries = () => {
    try {
        return async dispatch => {
            const paramObj = {
                api_key: `${TMDB_API_KEY}`,
                    language: 'en-US',
                    page: 1
            }
            const response = await axios.get(`https://api.themoviedb.org/3/tv/popular`,{
                params: paramObj,
            },);
            console.log('tvResponse', response)
            if (response.data) {
                dispatch({
                    type: GET_TVSERIES,
                    payload: response.data.results
                });
            } else {
                console.log('err',response.error);
            }
        };
    } catch (error) {
        // Add custom logic to handle errors
        console.log(error);
    }
};
export const addMovie = movie => dispatch => {
    dispatch({
      type: ADD_FAVORITE_MOVIES,
      payload: movie
    });
  };

  export const removeMovie = movie => dispatch => {
    dispatch({
      type: REMOVE_FAVORITE_MOVIES,
      payload:movie
    });
  };

  export const addTvSeries =tvSeries =>dispatch => {
    dispatch({
      type:  ADD_FAVORITE_TVSERIES,
      payload: tvSeries
    });
  };
  export const removeTvSeries =tvSeries =>dispatch => {
    dispatch({
      type:  REMOVE_FAVORITE_TVSERIES,
      payload: tvSeries
    });
  };