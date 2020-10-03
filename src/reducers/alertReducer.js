import {
    SHOW_ALERT,
    HIDEN_ALERT
} from '../types'

const initialState = {
    alert: null
}

const alertReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case HIDEN_ALERT:
            return {
                ...state,
                alert: null
            }
        default:
            return state
    }
}

export default alertReducer