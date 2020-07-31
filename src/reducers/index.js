import { combineReducers } from "redux";

const initState = {
  loading: false,
  loadingGenreArtists: false,
  genres: [],
  genreArtists: [],
  error: "",
};

const rootReducer = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case "FETCHING_GENRES_PENDING":
      return {
        ...state,
        loading: true,
      };
      break;
    case "FETCHING_GENRES_SUCCESS":
      return {
        ...state,
        loading: false,
        genres: [...state.genres, action.payload],
        error: "",
      };
      break;
    case "FETCHING_GENRES_FAILED":
      return {
        ...state,
        loading: false,
        genres: [],
        error: action.payload,
      };
      break;
    case "FETCHING_ARTISTS_PENDING":
      return {
        ...state,
        loadingGenreArtists: true,
      };
      break;
    case "FETCHING_ARTISTS_SUCCESS":
      return {
        ...state,
        loadingGenreArtists: false,
        genreArtists: [...state.genreArtists, action.payload],
      };
      break;
    default:
      return state;
  }
};

// export default combineReducers({
//   rootReducer,
// });
export default rootReducer;
