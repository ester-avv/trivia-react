import { combineReducers } from 'redux';
import player from './dataReducer';
import logicPoints from './logicPoints';

const rootReducer = combineReducers({
  player,
  logicPoints,
});

export default rootReducer;
