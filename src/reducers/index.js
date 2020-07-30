import { combineReducers } from "redux";

const initState = {
  genres: [],
  genreArtists: [],
};

const reducer = (state = initState, action) => {
  const { genres, genreArtists } = state;

  switch (action.type) {
    case "GENRE_SELECTD":
      return {
        ...state,
        genres: [...genres, action.payload],
      };
      break;
    case "ARTISTS_SELECTED":
      return {
        ...state,
        genreArtists: [...genreArtists, action.payload],
      };
      break;
    default:
      return initState;
  }
};

export default combineReducers({
  reducer,
});
