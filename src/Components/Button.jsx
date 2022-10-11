import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { dataTestId, text, onClick, isDisabled } = this.props;
    return (
      <button
        type="button"
        data-testid={ dataTestId }
        onClick={ onClick }
        disabled={ isDisabled }
      >
        { text }
      </button>
    );
  }
}

Button.propTypes = ({
  dataTestId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
});
