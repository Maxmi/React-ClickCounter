import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count
    };
  }

  handlePlus() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinus() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div className="container">
        <div className="counter">{this.state.count}</div>
        <button className="plus" onClick={this.handlePlus}>
          +
        </button>
        <button className="reset" onClick={this.handleReset}>
          Reset
        </button>
        <button className="minus" onClick={this.handleMinus}>
          -
        </button>
      </div>
    );
  }
}

App.defaultProps = {
  count: 0
};

App.propTypes = {
  count: PropTypes.number
};
