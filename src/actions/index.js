export const fetchGenres = (genres) => {
  return {
    type: "FETCHING_GENRES",
    payload: genres,
  };
};

export const selectArtistsGenre = (artists) => {
  return {
    type: "ARTISTS_SELECTED",
    payload: artists,
  };
};
