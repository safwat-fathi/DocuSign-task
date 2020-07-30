import React from "react";
import { connect } from "react-redux";

const GenresList = () => {
  return (
    <div>
      <h1>From GenresList</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);

  return { songs: state.songs };
};

export default connect(mapStateToProps)(GenresList);
