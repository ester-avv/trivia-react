import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Questions from '../Components/Questions';

export default class Game extends Component {
/*   fetchQuestions = async () => {
    const { data } = this.props;
    const urlToken = `opentdb.com/api.php?amount=5&token=${data.token}`;
    const responseToken = await fetch(urlToken);
    const dataToken = await responseToken.json();
  }; */

  render() {
    return (
      <div>
        <Header />
        <Questions />
        <button type="button">
          <Link to="/feedback"> FEEDBACK </Link>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.dataReducer.data;
}

connect(mapStateToProps)(Game);
