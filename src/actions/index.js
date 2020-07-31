import api from "../utils/api";

/* 
---------------
genres actions
---------------
*/
export const fetchGenresRequest = () => {
  return {
    type: "FETCHING_GENRES_PENDING",
  };
};

export const fetchGenresSuccess = (genres) => {
  return {
    type: "FETCHING_GENRES_SUCCESS",
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
        dispatch(fetchGenresSuccess(genres.data));
      })
      .catch((err) => {
        dispatch(fetchGenresFail(err.message));
      });
  };
};

/* 
---------------
genre artists actions
---------------
*/
export const fetchGenreArtistsRequest = () => {
  return {
    type: "FETCHING_ARTISTS_GENRE_PENDING",
  };
};

export const fetchGenreArtistsSuccess = (genreArtists) => {
  return {
    type: "FETCHING_ARTISTS_GENRE_SUCCESS",
    payload: genreArtists,
  };
};

export const fetchGenreArtistsFail = (error) => {
  return {
    type: "FETCHING_ARTISTS_GENRE_FAILED",
    payload: error,
  };
};

export const fetchGenreArtists = (genreID) => {
  return (dispatch) => {
    // setting loading state to true
    dispatch(fetchGenreArtistsRequest());

    api
      .get(`/genre/${genreID}/artists`)
      .then((res) => {
        const genreArtists = res.data;

        dispatch(fetchGenreArtistsSuccess(genreArtists.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchGenreArtistsFail(err.message));
      });
  };
};
