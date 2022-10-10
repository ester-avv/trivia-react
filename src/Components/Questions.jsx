import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './Button';

class Questions extends Component {
  state = {
    questions: [],
    index: 0,
  };

  async componentDidMount() {
    await this.fetchQuestions();
  }

  fetchQuestions = async () => {
    const { data, history } = this.props;
    try {
      const urlToken = `https://opentdb.com/api.php?amount=5&token=${data.token}`;
      const responseToken = await fetch(urlToken);
      const dataToken = await responseToken.json();
      this.setState({ questions: dataToken.results });
    } catch (error) {
      localStorage.removeItem('token');
      history.push('/');
    }
  };

  render() {
    const { questions, index } = this.state;
    const resp = questions.length !== 0 && [
      ...questions[index].incorrect_answers,
      questions[index].correct_answer,
    ];
    console.log(resp);
    return (
      <div>
        {questions.length !== 0 && (
          <div>
            <p data-testid="question-category">{questions[index].category}</p>
            <p data-testid="question-text">{questions[index].question}</p>
            <div data-testid="answer-options">
              {resp.map((element, indexAns) => (
                <Button
                  key={ indexAns }
                  text={ element === questions[index]
                    .correct_answer ? questions[index].correct_answer : element }
                  dataTestId={
                    element === questions[index]
                      .correct_answer ? 'correct-answer'
                      : `wrong-answer-${indexAns}`
                  }
                />)).sort(() => Math.random() - 0.5)}
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.dataReducer.data,
});

export default connect(mapStateToProps)(Questions);
