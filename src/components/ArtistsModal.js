import React from "react";
import { Header, Modal } from "semantic-ui-react";

const artistsModal = ({
  trigger,
  genre,
  loadingArtistsGenre,
  artistsGenre,
}) => {
  return (
    <Modal trigger={trigger} closeIcon>
      <Header content={`Atrists In ${genre.name}`} />
      <Modal.Content>
        <p>Artists:</p>
        <p>{loadingArtistsGenre ? "loading..." : `${artistsGenre.length}`}</p>
      </Modal.Content>
    </Modal>
  );
};

export default artistsModal;
