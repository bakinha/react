import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: props.data,
    };
  }

  onIncrement = () => {
    console.log('onIcrement');

    this.setState(prevState => {
      if (this.state.count < this.state.data.length - 1)
        return {
          count: prevState.count + 1,
        };
    });
  };

  onDecrement = () => {
    if (this.state.count > 0)
      this.setState(prevState => {
        return {
          count: prevState.count - 1,
        };
      });
  };

  render() {
    const { count, data } = this.state;
    return (
      <>
        <div className="Read">
          <Publication {...data[count]} />
          <Controls
            onDecrement={this.onDecrement}
            onIncrement={this.onIncrement}
            count={count}
          />
          <Counter count={count} data={data} />
        </div>
      </>
    );
  }
}

Reader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Reader;
