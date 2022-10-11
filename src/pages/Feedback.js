import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Feedback extends Component {
  render() {
    const three = 3;
    const { name, urlGravatar, placar } = this.props;
    return (
      <header>
        <img data-testid="header-profile-picture" src={ urlGravatar } alt={ name } />
        <h3 data-testid="header-player-name" id="name">
          {name}
        </h3>
        <h3 data-testid="header-score" id="placar">
          {placar}
        </h3>
        { (placar < three) ? <p data-testid="feedback-text">Could be better...</p>
          : <p data-testid="feedback-text">Well Done!</p>}
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
