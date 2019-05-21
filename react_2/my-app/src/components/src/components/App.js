import React, { Component } from 'react';
import Reader from './Reader/Reader';
import MoviePage from './MoviePage/MoviePage';
import data from './Publications.json';
import Dashboard from './Dashboard/Dashboard';

class App extends Component {
  state = {};

  render() {
    return <Reader data={data} />;
    <Dashboard />;
  }
}

export default App;
