import { GET_MOVIES, GET_TVSERIES,ADD_FAVORITE_MOVIES,REMOVE_FAVORITE_MOVIES,ADD_FAVORITE_TVSERIES,REMOVE_FAVORITE_TVSERIES } from "./actions";
const initialState = {
    movies: [],
    moviesBookmarks: [],
    tvSeries: [],
    tvSeries_Bookmark: []
};
function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, movies: action.payload };
            case ADD_FAVORITE_MOVIES:
                return { ...state, moviesBookmarks: [...state.moviesBookmarks, action.payload] };
              case REMOVE_FAVORITE_MOVIES:
                return {
                  ...state,
                  moviesBookmarks: state.moviesBookmarks.filter(movie => movie.id !== action.payload.id)
                };
              default:
                return state;
            }
    }
export default moviesReducer;
