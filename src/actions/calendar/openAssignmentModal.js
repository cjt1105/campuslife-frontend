import { OPEN_VIEW_ASSIGNMENT_MODAL } from '../types';

export default function openAssignmentModal() {
    return dispatch => {
        dispatch({
          type: OPEN_VIEW_ASSIGNMENT_MODAL,
          payload: {open: true }
        });
    }
}
