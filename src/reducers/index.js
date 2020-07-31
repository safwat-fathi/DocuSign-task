// import { combineReducers } from "redux";

const initState = {
  loading: false,
  loadingGenreArtists: false,
  genres: [],
  genreArtists: [],
  error: "",
};

const rootReducer = (state = initState, action) => {
  const { genres } = state;

  switch (action.type) {
    case "FETCHING_GENRES_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "FETCHING_GENRES_SUCCESS":
      return {
        ...state,
        loading: false,
        genres: [...genres, ...action.payload],
        error: "",
      };
    case "FETCHING_GENRES_FAILED":
      return {
        ...state,
        loading: false,
        genres: [],
        error: action.payload,
      };
    case "FETCHING_ARTISTS_GENRE_PENDING":
      return {
        ...state,
        loadingGenreArtists: true,
      };
    case "FETCHING_ARTISTS_GENRE_SUCCESS":
      return {
        ...state,
        loadingGenreArtists: false,
        genreArtists: [...action.payload],
      };
    case "FETCHING_ARTISTS_GENRE_FAILED":
      return {
        ...state,
        loadingGenreArtists: false,
        genreArtists: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
