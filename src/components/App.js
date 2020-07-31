import React, { useEffect } from "react";
import { connect } from "react-redux";
import ArtistsModal from "./ArtistsModal";
import Spinner from "./Spinner";

import { fetchGenres } from "../actions";

const App = (props) => {
  console.log(props);

  useEffect(() => {
    props.fetchGenres();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    let genreID = e.target.value;
    console.log(genreID);
  };

  return props.loading ? (
    <div>
      <Spinner />
    </div>
  ) : (
    <>
      {props.genres.map((genre) => (
        <div className="card" key={genre.id}>
          <img src={genre.picture} alt="" />
          <h2>{genre.name}</h2>

          <ArtistsModal
            trigger={
              <button onClick={handleClick} type="button" value={genre.id}>
                show artists
              </button>
            }
            genre={genre}
            // artistsGenre={artistsGenre}
            loadingArtistsGenre={props.loadingArtistsGenre}
          />
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGenres: () => dispatch(fetchGenres()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
