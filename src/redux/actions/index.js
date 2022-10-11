const GET_TOKEN = 'GET_TOKEN';
const GET_TIMER = 'GET_TIMER';
const GET_SCORE = 'GET_SCORE';

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

export { fetchToken, getTimer, getScore, GET_TOKEN, GET_TIMER, GET_SCORE };
