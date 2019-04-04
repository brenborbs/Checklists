import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import checkReducer from './checkReducer';
import asyncReducer from '../async/asyncReducer';

const rootReducer = combineReducers({
  form: FormReducer,
  checklists: checkReducer,
  async: asyncReducer,
  toastr: toastrReducer
})

export default rootReducer;