import { CLOSE_VIEW_ASSIGNMENT_MODAL } from '../types';

export default function closeAssignmentModal() {
    return dispatch => {
        dispatch({
          type: CLOSE_VIEW_ASSIGNMENT_MODAL,
          payload: {open: false }
        });
    }
}
