import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "asdasd", duration: "3:40" },
    { title: "as878", duration: "3:00" },
    { title: "WWEWEWasd", duration: "5:10" },
    { title: "EEEEE", duration: "4:10" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if ((action.type = "SONG_SELECTD")) {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
