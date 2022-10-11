import { GET_TIMER, SET_TIMER } from '../actions/index';

const INITIAL_STATE = {
  timer: 30,
  points: 0,
};
const logicPoints = (store = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TIMER:
    return { ...store, timer: action.payload };
  case SET_TIMER:
    return { ...store, timer: action.payload };
  default:
    return store;
  }
};
export default logicPoints;
