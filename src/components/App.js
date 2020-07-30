import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ArtistsModal from "./ArtistsModal";
import Spinner from "./Spinner";

import { fetchGenres, selectArtistsGenre } from "../actions";

// instance of axios with base URL
import api from "../utils/api";

const App = () => {
  const [genres, setGenres] = useState([]);
  const [artistsGenre, setArtistsGenre] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingArtistsGenre, setLoadingArtistsGenre] = useState(true);

  useEffect(() => {
    api
      .get("/genre")
      .then((response) => {
        setGenres(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    let genreID = e.target.value;
    console.log(genreID);

    // redux action

    api
      .get(`/genre/${genreID}/artists`)
      .then((response) => {
        setArtistsGenre(response.data);
        setLoadingArtistsGenre(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return loading ? (
    <div>
      <Spinner />
    </div>
  ) : (
    <>
      {genres.data.map((genre) => (
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
            artistsGenre={artistsGenre}
            loadingArtistsGenre={loadingArtistsGenre}
          />
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);

  return { songs: state.songs };
};

export default connect(mapStateToProps)(App);
