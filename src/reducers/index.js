import { combineReducers } from 'redux'
import productsReducer from './productReducer'
import alertsReducer from './alertReducer'

export default combineReducers({
    products: productsReducer,
    alerts: alertsReducer
})