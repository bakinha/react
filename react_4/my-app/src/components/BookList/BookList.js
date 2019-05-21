import React from 'react';
import BookListItem from '../BookListItem/BookListItem';

const BookList = ({ data }) => (
  <div>
    {data.map(el => (
      <BookListItem key={el.id} {...el.volumeInfo} />
    ))}
  </div>
);

export default BookList;
