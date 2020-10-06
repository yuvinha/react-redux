import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "I Want It That Way", duration: "3:45" },
    { title: "My Heart Will Go On", duration: "3:33" },
    { title: "I Swear", duration: "4:02" },
    { title: "I Will Always Love You", duration: "4:15" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
