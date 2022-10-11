import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Feedback extends Component {
  render() {
    const { name, urlGravatar, placar } = this.props;
    console.log(this.props);
    return (
      <header>
        <img data-testid="header-player-picture" src={ urlGravatar } alt={ name } />
        <h3 data-testid="header-player-name">
          {' '}
          {name}
          {' '}
        </h3>
        <h3 data-testid="header-score">
          {' '}
          {placar}
          {' '}
        </h3>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.dataReducer.name,
    urlGravatar: state.dataReducer.urlGravatar,
    placar: state.dataReducer.placar,
  };
}

Feedback.propTypes = {
  name: PropTypes.string.isRequired,
  urlGravatar: PropTypes.string.isRequired,
  placar: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
