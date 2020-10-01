import {
    ADD_PRODUCT,
    SAVE_PRODUCT,
    ERROR_PRODUCT
} from '../types'

const initialState = {
    products: [],
    error: null,
    loading: null
}

const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        
    
        default:
            return state
    }
}

export default productsReducer