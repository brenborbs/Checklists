import { toastr } from 'react-redux-toastr';
import {
  CREATE_CHECKLIST,
  UPDATE_CHECKLIST,
  GET_CHECKLISTS
} from '../types/checkListTypes';
import { 
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
 } from '../async/asyncActions';

import { fetchSampledata } from '../data/mockApi';

export const createChecklist = (checklist) => {
  return async dispatch => {
    try {
      dispatch({ type: CREATE_CHECKLIST,
      payload: {
        checklist
      } 
    });
      toastr.success('Sucess!' , 'Checklist has been created')
    } catch (error) {
      console.log(error)
      toastr.error('Oops', 'Something went wrong!')
    }
  }
}

export const updateChecklists = (checklists) => {
  return async dispatch => {
    try {
      dispatch ({ type: UPDATE_CHECKLIST,
         payload: {
           checklists
         } 
      });
      toastr.success('Success!', 'Checklist has been updated' )
    } catch (error) {
      console.log(error)
      toastr.error('Opps', 'Something went wrong!')
    }
  }
}

export const getCheckLists = (checklists) => {
  return {
    type: GET_CHECKLISTS,
    payload: checklists
  }
}

export const loadCheckLists = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart())
      let checklists = await fetchSampledata();
      dispatch(getCheckLists(checklists))
      dispatch(asyncActionFinish())
    } catch (error) {
        console.log(error);
        dispatch(asyncActionError())
    }
  }
}