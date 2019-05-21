import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ count, data }) => (
  <p>
    {count + 1} | {data.length}
  </p>
);

Counter.propTypes = {
  count: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default Counter;
