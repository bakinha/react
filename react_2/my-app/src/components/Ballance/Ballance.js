import React from 'react';
import styles from './Ballance/Ballance.module.css';

const Ballance = ({ income, outcome, ballance }) => (
  <section class="balance">
    <span>{income}</span>
    <span>{outcome}</span>
    <span>{ballance}</span>
  </section>
);

export default Ballance;
