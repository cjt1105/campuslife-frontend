import { OPEN_CREATE_ASSIGNMENT_MODAL } from '../types';

export default function openAssignmentModal() {
    return dispatch => {
        dispatch({
            type: OPEN_CREATE_ASSIGNMENT_MODAL,
            payload: {open: true}
        });
    }
}