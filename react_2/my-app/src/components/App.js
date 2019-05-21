import React, { Component } from 'react';
import Reader from './Reader/Reader';
import MoviePage from './MoviePage/MoviePage';
import data from './Publications.json';

class App extends Component {
  state = {};

  render() {
    return <Reader data={data} />;
    <MoviePage 

  }
}

export default App;
