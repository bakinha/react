import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieGrid from './MovieGrid/MovieGrid';
import MovieGridItem from './MovieGridItem/MovieGridItem';
import SearchBar from './SearchBar/SearchBar';


class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



render() {
  const MoviePage = () => {
    <div class="container">
  <MovieGrid items={items} />
  <MovieGridItem />
  <SearchBar />

  </div>
  };
}



export default MoviePage;
