import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import logicPoints from './logicPoints';

const rootReducer = combineReducers({
  dataReducer,
  logicPoints,
});

export default rootReducer;
