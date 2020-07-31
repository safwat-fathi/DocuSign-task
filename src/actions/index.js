import api from "../utils/api";

export const fetchGenresRequest = () => {
  return {
    type: "FETCHING_GENRES_PENDING",
  };
};

export const fetchGenresSuccess = (genres) => {
  return {
    type: "FETCHING_ARTISTS_SUCCESS",
    payload: genres,
  };
};

export const fetchGenresFail = (error) => {
  return {
    type: "FETCHING_GENRES_FAILED",
    payload: error,
  };
};

export const fetchGenres = () => {
  return (dispatch) => {
    // setting loading state to true
    dispatch(fetchGenresRequest());

    api
      .get("/genre")
      .then((res) => {
        const genres = res.data;
        dispatch(fetchGenresSuccess(genres));
      })
      .catch((err) => {
        dispatch(fetchGenresFail(err.message));
      });
  };
};
