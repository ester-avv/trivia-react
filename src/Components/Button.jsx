import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { dataTestId, text } = this.props;
    return (
      <button
        type="button"
        data-testid={ dataTestId }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = ({
  dataTestId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
});
