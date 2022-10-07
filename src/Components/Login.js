import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchToken } from '../Redux/actions';

class Login extends Component {
  state = {
    email: '',
    name: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  validaBotao = () => {
    const { email, name } = this.state;
    const REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const validReg = REGEX.test(email);
    const TRUE_FALSE = name.length > 0 && validReg;
    return !TRUE_FALSE;
  };

  fetchAPI = async () => {
    const { history, dispatch } = this.props;
    const url = "https://opentdb.com/api_token.php?command=request";
    const response = await fetch(url);
    const data = await response.json();
    
    dispatch(fetchToken(data));
    localStorage.setItem('token', data.token);
    history.push("/game")
    
  }

  render() {
    return (
      <form onChange={ this.handleChange }>
        <input
          name="email"
          type="email"
          data-testid="input-gravatar-email"
          placeholder="Email"
        />
        <input
          name="name"
          type="text"
          data-testid="input-player-name"
          placeholder="Nome"
        />
        <button
          disabled={ this.validaBotao() }
          type="button"
          data-testid="btn-play"
          onClick={this.fetchAPI}
        >
          Play
        </button>
      </form>
    );
  }
}

export default connect()(Login);
