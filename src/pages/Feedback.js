import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Feedback extends Component {
  render() {
    const three = 3;
    const { name, urlGravatar, score, assertions } = this.props;
    console.log(this.props);
    return (
      <header>
        <img data-testid="header-profile-picture" src={ urlGravatar } alt={ name } />
        <h3 data-testid="header-player-name" id="name">
          {name}
        </h3>
        <h3 data-testid="header-score" id="placar">
          {score}
        </h3>
        { (assertions < three) ? <p data-testid="feedback-text">Could be better...</p>
          : <p data-testid="feedback-text">Well Done!</p>}
        <div>
          <div>
            <h4>
              Placar total:
              {' '}
              <span data-testid="feedback-total-score">{score}</span>
            </h4>
          </div>
          <div>
            <h4>
              Acertou um total de
              {' '}
              <span data-testid="feedback-total-question">{ assertions }</span>
              {' '}
              perguntas
            </h4>
          </div>
        </div>
        <Link to="/">
          <button type="button" data-testid="btn-play-again">Play Again</button>
        </Link>
        <Link to="/ranking">
          <button type="button" data-testid="btn-ranking">Ranking</button>
        </Link>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.player.name,
    urlGravatar: state.player.urlGravatar,
    score: state.player.score,
    assertions: state.player.assertions,
  };
}

Feedback.propTypes = {
  name: PropTypes.string.isRequired,
  urlGravatar: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
