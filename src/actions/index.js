export const selectSong = (song) => {
  return {
    type: "SONG_SELECTD",
    payload: song,
  };
};
