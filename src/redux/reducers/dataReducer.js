import { GET_TOKEN } from '../actions/index';

const INITIAL_STATE = {
  data: {},
  name: '',
  email: '',
  urlGravatar: '',
  placar: 0,
};

function dataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_TOKEN:
    return {
      ...state,
      data: action.payload.data,
      name: action.payload.name,
      email: action.payload.email,
      urlGravatar: action.payload.urlGravatar,
    };

  default:
    return state;
  }
}

export default dataReducer;
