import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {};
    axios
      .get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
      .then((response) => {
        setGenres(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return loading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    genres.data.map((genre) => (
      <div className="card" key={genre.id}>
        <img src={genre.picture} alt="" />
        <h2>{genre.name}</h2>
        <a href="#">show artists</a>
      </div>
    ))
  );
};

export default App;
