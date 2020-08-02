import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import ArtistsModal from "./ArtistsModal";
import Spinner from "./Spinner";

import { fetchGenres, fetchGenreArtists } from "../actions";

const Card = styled.div`
  text-align: center;
  width: 30%;
  padding: 10px 0;
  margin: 15px auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #eae7e7;
`;

const GenresList = (props) => {
  // props
  const {
    loading,
    loadingGenreArtists,
    genres,
    fetchGenres,
    fetchGenreArtists,
    error,
  } = props;

  // state
  // const [genreID, setGenreID] = useState(false);

  useEffect(() => {
    fetchGenres();
  }, []);

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
          {/* <Link to={{ pathname: `/${genre.id}`, state: { modal: true } }}>
            show artists
          </Link> */}
          <ArtistsModal
            trigger={
              // <button onClick={handleShow} type="button" value={genre.id}>
              //   show artists
              // </button>
              <Link
                onClick={() => {
                  fetchGenreArtists(genre.id);
                }}
                to={`/${genre.id}`}
              >
                show artists
              </Link>
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
