import { GET_TOKEN, GET_SCORE } from '../actions/index';

const INITIAL_STATE = {
  data: {},
  name: '',
  email: '',
  urlGravatar: '',
  score: 0,
};

function player(state = INITIAL_STATE, action) {
  const ten = 10;
  switch (action.type) {
  case GET_TOKEN:
    return {
      ...state,
      data: action.payload.data,
      name: action.payload.name,
      email: action.payload.email,
      urlGravatar: action.payload.urlGravatar,
    };
  case GET_SCORE:
    return {
      ...state,
      score: state.score + (ten + (action.payload.timer * action.payload.dificuldade)) };
  default:
    return state;
  }
}

export default player;
