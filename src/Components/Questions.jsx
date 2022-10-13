import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import Timer from './Timer';

import { getScore, setTimer } from '../redux/actions/index';

class Questions extends Component {
  state = {
    questions: [],
    index: 0,
    correctAnswer: 'correct-answer',
    attr: 'data-testid',
    // placar: 0,
    // isDisabled: false,
  };

  async componentDidMount() {
    await this.fetchQuestions();
  }

  addPlacar = (target) => {
    const { questions, index, correctAnswer, attr } = this.state;
    const { timer, dispatch } = this.props;
    let dificuldade;
    const one = 1;
    const two = 2;
    const three = 3;

    if (questions[index].difficulty === 'easy') {
      dificuldade = one;
    } else if (questions[index].difficulty === 'medium') {
      dificuldade = two;
    } else {
      dificuldade = three;
    }

    const testId = target.getAttribute(attr);
    if (testId === correctAnswer) {
      dispatch(getScore({ dificuldade, timer }));
    }
  };

  changeStyleOptions = ({ target }) => {
    const { dispatch } = this.props;
    const { correctAnswer } = this.state;
    const zero = 0;
    const testId = target.parentElement.childNodes;
    testId.forEach((element) => {
      const attr = element.getAttribute('data-testid');
      if (attr === correctAnswer) {
        element.style.border = '3px solid rgb(6, 240, 15)';
      } else {
        element.style.border = '3px solid red';
      }
    });
    this.addPlacar(target);
    dispatch(setTimer(zero));
  };

  handleClickNext = ({ target }) => {
    const { dispatch } = this.props;
    const { index, correctAnswer, attr } = this.state;
    const seconds = 30;
    this.setState({ index: index + 1 });
    dispatch(setTimer(seconds));
    const testId = target.parentElement.nextElementSibling;

    testId.childNodes.forEach((element) => {
      const attrElement = element.getAttribute(attr);
      if (attrElement === correctAnswer) {
        element.style.border = '1px solid black';
      } else {
        element.style.border = '1px solid black';
      }
    });
  };

  fetchQuestions = async () => {
    const { data } = this.props;
    const urlToken = `https://opentdb.com/api.php?amount=5&token=${data.token}`;
    const responseToken = await fetch(urlToken);
    const dataToken = await responseToken.json();
    this.setState({ questions: dataToken.results });
    if (dataToken.results.length === 0) {
      window.location = '/';
    }
  };

  render() {
    const { questions, index, correctAnswer } = this.state;
    const { timer } = this.props;
    const resp = (questions.length !== 0) && [
      ...questions[index].incorrect_answers,
      questions[index].correct_answer,
    ];

    const magicNumber = 0.5;
    const four = 4;
    return (
      <div>
        {questions.length !== 0 && (
          <div>
            <p data-testid="question-category">{questions[index].category}</p>
            <p data-testid="question-text">{questions[index].question}</p>
            { timer === 0
              ? (
                <Link to={ (index === four) ? '/feedback' : '/game' }>
                  <button
                    type="button"
                    data-testid="btn-next"
                    onClick={ this.handleClickNext }
                  >
                    Next
                  </button>
                </Link>
              ) : (
                <Timer />
              )}
            <div data-testid="answer-options">
              {resp.map((element, indexAns) => (
                <Button
                  key={ indexAns }
                  isDisabled={ timer === 0 }
                  text={ element === questions[index]
                    .correct_answer ? questions[index].correct_answer : element }
                  dataTestId={
                    element === questions[index]
                      .correct_answer ? correctAnswer
                      : `wrong-answer-${indexAns}`
                  }
                  onClick={ this.changeStyleOptions }
                />)).sort(() => Math.random() - magicNumber)}
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.player.data,
  timer: state.logicPoints.timer,
});

Questions.propTypes = ({
  data: PropTypes.shape.isRequired,
  timer: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
});

export default connect(mapStateToProps)(Questions);
