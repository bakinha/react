import React from 'react';

const genres = [
  'fantasy',
  'thriller',
  'drama',
  'mystery',
  'horror',
  'satire',
  'computers',
];

const Controls = ({ onChange, onSelect, onClick }) => (
  <div>
    <input
      onChange={onChange}
      className="input"
      type="text"
      placeholder="text"
    />
    <select onChange={onSelect} className="select">
      {genres.map(el => (
        <option key={el} value={el}>
          {el}
        </option>
      ))}
    </select>
    <button type="button" onClick={onClick} className="btn">
      search
    </button>
  </div>
);

export default Controls;
