import { GET_TVSERIES,ADD_FAVORITE_TVSERIES,REMOVE_FAVORITE_TVSERIES } from "./actions";
const initialState = {
    tvSeries: [],
    tvSeries_Bookmark: []
};

function tvSeriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TVSERIES:
            return { ...state, tvSeries: action.payload };
            case ADD_FAVORITE_TVSERIES:
                return { ...state, tvSeries_Bookmark: [...state.tvSeries_Bookmark, action.payload] };
              case REMOVE_FAVORITE_TVSERIES:
                return {
                  ...state,
                  tvSeries_Bookmark: state.tvSeries_Bookmark.filter(tvSeries => tvSeries.id !== action.payload.id)
                };
              default:
                return state;
            }
}
export default tvSeriesReducer;