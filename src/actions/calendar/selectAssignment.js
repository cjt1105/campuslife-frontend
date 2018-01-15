import { SELECT_ASSIGNMENT } from '../types';

export default function selectAssignment(assignment) {
    return dispatch => {
        dispatch(selectAssignmentAsync(assignment));
    }
}

function selectAssignmentAsync(state){
  return {
    type: SELECT_ASSIGNMENT,
    payload: state
  };
}