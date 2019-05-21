import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onIncrement, onDecrement }) => (
  <section className="Controls">
    <button onClick={onDecrement} type="button" className="button">
      назад
    </button>
    <button onClick={onIncrement} type="button" className="button">
      вперед
    </button>
  </section>
);

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Controls;
