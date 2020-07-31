import React, { useEffect } from "react";
import { connect } from "react-redux";
import ArtistsModal from "./ArtistsModal";
import Spinner from "./Spinner";

import { fetchGenres, fetchGenreArtists } from "../actions";

const GenresList = ({
  loading,
  loadingGenreArtists,
  genres,
  fetchGenres,
  fetchGenreArtists,
  error,
}) => {
  useEffect(() => {
    fetchGenres();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    let genreID = e.target.value;
    fetchGenreArtists(genreID);
  };

  return loading ? (
    <div>
      <Spinner />
    </div>
  ) : (
    <>
      {genres.map((genre) => (
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
            loadingGenreArtists={loadingGenreArtists}
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
    fetchGenreArtists: (id) => dispatch(fetchGenreArtists(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
