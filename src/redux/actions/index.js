const GET_TOKEN = 'GET_TOKEN';
const GET_TIMER = 'GET_TIMER';

const fetchToken = (payload) => ({
  type: GET_TOKEN,
  payload,
});
const getTimer = (payload) => ({
  type: GET_TIMER,
  payload,
});

export { fetchToken, getTimer, GET_TOKEN, GET_TIMER };
