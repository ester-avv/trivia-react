import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { dataTestId, text } = this.props;
    return (
      <button
        type="button"
        data-testid={dataTestId}
      >
        { text }
      </button>
    )
  }
}
