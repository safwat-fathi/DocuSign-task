import React from "react";
import { connect } from "react-redux";
import { Header, Modal } from "semantic-ui-react";

const ArtistsModal = ({
  trigger,
  genre,
  loadingGenreArtists,
  genreArtists,
}) => {
  return (
    <Modal trigger={trigger} closeIcon>
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

export default connect(mapStateToProps)(ArtistsModal);
