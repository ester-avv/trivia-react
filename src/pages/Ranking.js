import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  getRankingFromStorage = () => {
    const rankingList = JSON.parse(localStorage.getItem('ranking'));
    return rankingList;
  };

  render() {
    const rankingList = this.getRankingFromStorage();
    return (
      <div>
        <h3 data-testid="ranking-title">Ranking</h3>
        <Link to="/">
          <button type="button" data-testid="btn-go-home">Jogar Novamente!</button>
        </Link>
        {
          rankingList.map((element, index) => (
            <ul key={ index }>
              <li>
                <img src={ element.urlGravatar } alt={ element.name } />
                <p data-testid={ `player-name-${index}` }>{element.name}</p>
                <p data-testid={ `player-score-${index}` }>{element.score}</p>
              </li>
            </ul>
          ))
        }
      </div>
    );
  }
}

export default Ranking;
