import {
    SHOW_ALERT,
    HIDEN_ALERT
} from '../types'


/**
 *  showAlert
 */
export const showAlertAction = alert => {
    return dispatch => {
        dispatch(showAlert(alert))
    }
}

const showAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})


/**
 *  hieAlert
 */
export const hideAlertAction = () => {
    return dispatch => {
        dispatch(hideAlert())
    }
}

const hideAlert = () => ({
    type: HIDEN_ALERT
})