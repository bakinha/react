import React from 'react';
import styles from '../Dashboard/Dashaboard.module.css';

const Controls = ({ onChange, onClick }) => (
  <section class="controls">
    <input type="number" />
    <button>Deposit</button>
    <button>Withdraw</button>
  </section>
);

export default Controls3;
