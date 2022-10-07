import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
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
    const { name, email } = this.state;
    const hash = md5(email).toString();
    console.log(hash);
    const urlGravatar = `https://www.gravatar.com/avatar/${hash}`;
    const url = 'https://opentdb.com/api_token.php?command=request';
    const response = await fetch(url);
    const data = await response.json();

    dispatch(fetchToken({ name, email, data, urlGravatar }));
    localStorage.setItem('token', data.token);
    history.push('/game');
  };

  render() {
    const { history } = this.props;
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
          onClick={ this.fetchAPI }
        >
          Play
        </button>
        <button
          type="button"
          data-testid="btn-settings"
          onClick={ () => history.push('/configuracoes') }
        >
          Configurações
        </button>
      </form>
    );
  }
}

Login.propTypes = ({
  history: PropTypes.shape.isRequired,
  dispatch: PropTypes.func.isRequired,
});

export default connect()(Login);
