import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { Header, Modal } from "semantic-ui-react";

const ArtistsModal = (props) => {
  const {
    trigger,
    closeIcon,
    genre,
    loadingGenreArtists,
    genreArtists,
  } = props;

  return (
    <Modal
      trigger={trigger}
      closeIcon
      onClose={(e) => {
        props.history.push("/");
      }}
    >
      <Header content={`Atrists in ${genre.name}`} />
      <Modal.Content>
        {loadingGenreArtists ? (
          <h3>Loading...</h3>
        ) : (
          <ol>
            {genreArtists.map((artist) => (
              <li key={artist.id}>{artist.name}</li>
            ))}
          </ol>
        )}
      </Modal.Content>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default compose(withRouter, connect(mapStateToProps))(ArtistsModal);
