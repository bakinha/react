import React from 'react';

const BookListItem = ({
  imageLinks,
  title,
  description,
  author,
  publisher,
  publishedDate,
  pageCount,
  rating,
}) => (
  <div>
    <img src={imageLinks.smallThumbnail} alt="" />
    <div>title {title}</div>
    <div>description {description}</div>
    <div>author{author}</div>
    <div>publisher {publisher} </div>
    <div>publishedDate {publishedDate}</div>
    <div>pageCount {pageCount}</div>
    <div>rating {rating}</div>
  </div>
);

export default BookListItem;
