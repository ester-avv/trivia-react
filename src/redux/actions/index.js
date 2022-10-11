const GET_TOKEN = 'GET_TOKEN';
const GET_TIMER = 'GET_TIMER';
const GET_SCORE = 'GET_SCORE';
const SET_TIMER = 'SET_TIMER';

const fetchToken = (payload) => ({
  type: GET_TOKEN,
  payload,
});
const getTimer = (payload) => ({
  type: GET_TIMER,
  payload,
});
const getScore = (payload) => ({
  type: GET_SCORE,
  payload,
});

const setTimer = (payload) => ({
  type: SET_TIMER,
  payload,
});

export { fetchToken, getTimer, getScore, setTimer,
  GET_TOKEN, GET_TIMER, GET_SCORE, SET_TIMER };
