import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import Timer from './Timer';

class Questions extends Component {
  state = {
    questions: [],
    index: 0,
  };

  async componentDidMount() {
    await this.fetchQuestions();
  }

  changeStyleOptions = ({ target }) => {
    const testId = target.parentElement.childNodes;
    testId.forEach((element) => {
      const attr = element.getAttribute('data-testid');
      if (attr === 'correct-answer') {
        element.style.border = '3px solid rgb(6, 240, 15)';
      } else {
        element.style.border = '3px solid red';
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
    const { questions, index } = this.state;
    const { timer } = this.props;
    const resp = questions.length !== 0 && [
      ...questions[index].incorrect_answers,
      questions[index].correct_answer,
    ];
    const magicNumber = 0.5;
    console.log(this.props);
    return (
      <div>
        {questions.length !== 0 && (
          <div>
            <p data-testid="question-category">{questions[index].category}</p>
            <p data-testid="question-text">{questions[index].question}</p>
            { timer === 0 ? <p>Próxima pergunta</p> : <Timer /> }
            <div data-testid="answer-options">
              {resp.map((element, indexAns) => (
                <Button
                  key={ indexAns }
                  isDisabled={ timer === 0 }
                  text={ element === questions[index]
                    .correct_answer ? questions[index].correct_answer : element }
                  dataTestId={
                    element === questions[index]
                      .correct_answer ? 'correct-answer'
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
  data: state.dataReducer.data,
  timer: state.logicPoints.timer,
});

Questions.propTypes = ({
  data: PropTypes.shape.isRequired,
  timer: PropTypes.number.isRequired,
});

export default connect(mapStateToProps)(Questions);
