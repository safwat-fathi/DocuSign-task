import React, { useEffect, useState } from "react";
// react router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";
// app components
import GenresList from "./GenresList";
// import Modal from "./Modal";
import ArtistsModal from "./ArtistsModal";

const App = (props) => {
  const { location } = props;

  const [prevLocation, setPrevLocation] = useState(null);

  useEffect(() => {
    let { location } = props;

    if (!(location.state && location.state.modal)) {
      setPrevLocation(location);
    }
  });

  const isModal =
    location.state && location.state.modal && prevLocation !== location;

  return (
    <Router>
      <Switch location={isModal ? prevLocation : location}>
        <Route exact path="/" component={GenresList} />
        <Route path="/:genre_id">
          <ArtistsModal />
        </Route>
        <Route>{"no match"}</Route>
      </Switch>
      {isModal ? (
        <Route exact path="/:genre_id">
          <ArtistsModal />
        </Route>
      ) : null}
    </Router>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default compose(withRouter, connect(mapStateToProps))(App);
