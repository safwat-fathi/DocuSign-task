import React, { useEffect, useState } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import Spinner from "./Spinner";

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

  useEffect(() => {
    console.log(artistsGenre);
  });

  return loading ? (
    <div>
      <Spinner />
    </div>
  ) : (
    <div>
      {genres.data.map((genre) => (
        <div className="card" key={genre.id}>
          <img src={genre.picture} alt="" />
          <h2>{genre.name}</h2>
          <a href="#"></a>

          <Modal
            trigger={
              <button onClick={handleClick} type="button" value={genre.id}>
                show artists
              </button>
            }
            closeIcon
          >
            <Header content={`Atrists In ${genre.name}`} />
            <Modal.Content>
              <p>Artists:</p>
              <p>
                {loadingArtistsGenre ? "loading..." : `${artistsGenre.length}`}
              </p>
            </Modal.Content>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default App;
