import {GET_LEADS} from '../actions/types'

const inital_state = {
    leads: []
}

export default function(state = inital_state, action) {
    switch (action.type) {
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            };
        default:
            return state;

    }
}