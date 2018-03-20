import { CLEAR_RESIDENCE_STATE } from '../types'

export default function clearResidenceState(state) {
    console.log('fire', state)
    return dispatch => {
            dispatch(dispatchClearResidenceState())
    }
}

function dispatchClearResidenceState() {
    return {
        type: CLEAR_RESIDENCE_STATE,
        payload: null
    }
}