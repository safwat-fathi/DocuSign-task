import React from "react";
// react router
import { BrowserRouter as Router, Route } from "react-router-dom";

import { connect } from "react-redux";
import GenresList from "./GenresList";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={GenresList} />
    </Router>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
