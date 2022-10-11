import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getTimer } from '../redux/actions/index';

class Timer extends Component {
  state = {
    intervalId: 0,
    timer: 30,
  };

  componentDidMount() {
    const ms = 1000;
    const interval = setInterval(this.decreTimer, ms);
    this.setState({
      intervalId: interval,
    });
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  decreTimer = () => {
    const { intervalId, timer } = this.state;
    const { dispatch } = this.props;
    if (timer >= 0) {
      this.setState((prevState) => (
        {
          timer: prevState.timer - 1,
        }
      ));
      dispatch(getTimer(timer));
    } else {
      clearInterval(intervalId);
      this.setState({ timer: 30 });
    }
  };

  render() {
    const { timer } = this.props;
    return (
      <div>{ timer }</div>
    );
  }
}
const mapStateToProps = (state) => ({
  timer: state.logicPoints.timer,
});
Timer.propTypes = {
  timer: propTypes.number.isRequired,
  dispatch: propTypes.func.isRequired,
};

export default connect(mapStateToProps)(Timer);
