import React from 'react';
import Home from '../Home/Home';
import BookList from '../BookList/BookList';

const Controls = ({ onChange, onSelect, onClick }) => (
  <div>
    <input onChange={onChange} class="input" type="text" placeholder="text" />
    <select onChange={onSelect} class="select">
      {genres.map(el => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
    <button onClick={onClick} class="btn">
      search
    </button>
  </div>
);

const genres = [
  'fantasy',
  'thriller',
  'drama',
  'mystery',
  'horror',
  'satire',
  'computers',
];

export default Controls;
