import { GET_TOKEN } from '../actions/index';

const INITIAL_STATE = {
  data: {},
};

function dataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_TOKEN:
    return { ...state, data: action.payload };

  default:
    return state;
  }
}

export default dataReducer;
