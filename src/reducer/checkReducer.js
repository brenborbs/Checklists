import { createReducer } from '../util/utilReducer';
import {
  CREATE_CHECKLIST,
  UPDATE_CHECKLIST,
  GET_CHECKLISTS
} from '../types/checkListTypes';

const initialState = [];

export const createChecklist = (state, payload) => {
  return [
    ...state, Object.assign({}, payload.checklist)
  ]
}

export const updateChecklists = (state, payload) => {
  return [
    ...state.filter(checklists => checklists.id !== payload.checklists.id),
    Object.assign({}, payload.checklists)
  ]
}

export const getCheckLists = (state, payload) => {
  return payload.checklists
}

export default createReducer(initialState, {
  [CREATE_CHECKLIST] : createChecklist,
  [UPDATE_CHECKLIST] : updateChecklists,
  [GET_CHECKLISTS] : getCheckLists
})