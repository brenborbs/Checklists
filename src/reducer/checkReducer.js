import { createReducer } from '../util/utilReducer';
import {
  CREATE_CHECKLIST,
  GET_CHECKLISTS
} from '../types/checkListTypes';

const initialState = [];

export const createChecklist = (state, payload) => {
  return [
    ...state, Object.assign({}, payload.checklist)
  ]
}

export const getCheckLists = (state, payload) => {
  return payload.checklists
}

export default createReducer(initialState, {
  [CREATE_CHECKLIST] : createChecklist,

  [GET_CHECKLISTS] : getCheckLists
})