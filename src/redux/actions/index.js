const GET_TOKEN = 'GET_TOKEN';

const fetchToken = (payload) => ({
  type: GET_TOKEN,
  payload,
});

export { fetchToken, GET_TOKEN };
