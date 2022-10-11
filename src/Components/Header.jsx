import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { name, urlGravatar, score } = this.props;
    return (
      <div>
        <img src={ urlGravatar } alt="avatar" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{ name }</p>
        <p data-testid="header-score">{ score }</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.player;
}

Header.propTypes = ({
  name: PropTypes.string.isRequired,
  urlGravatar: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
});

export default connect(mapStateToProps)(Header);
