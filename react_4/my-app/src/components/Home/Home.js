import React, { Component } from 'react';
import axios from 'axios';
import Controls from '../Controls/Controls';
import BookList from '../BookList/BookList';

class Home extends Component {
  state = {
    booksData: {},
  };

  componentDidMount() {
    console.log('mount');
    // fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms');

    // .then(res => res.json())
    // .then(data => console.log('data___:', data));
  }

  onChange = e => {
    console.log(e.target.value);
    this.setState({ inputData: e.target.value });
  };

  onSelect = e => {
    this.setState({ select: e.target.value });
  };

  onClick = e => {
    const { inputData, select } = this.state;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${inputData}+subject:${select}`,
      )
      .then(res => res.data)
      .then(data => this.setState({ booksData: data }));
  };

  render() {
    return (
      <>
        <div>Home page</div>
        <Controls
          onChange={this.onChange}
          onSelect={this.onSelect}
          onClick={this.onClick}
        />
        <BookList data={this.state.booksData.items || []} />
      </>
    );
  }
}

export default Home;
