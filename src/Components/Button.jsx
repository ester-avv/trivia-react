import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { dataTestId, text, onClick } = this.props;
    return (
      <button
        type="button"
        data-testid={ dataTestId }
        onClick={ onClick }
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
