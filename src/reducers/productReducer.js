import {
    LOADING_PRODUCT,
    ADD_PRODUCT,
    ERROR_PRODUCT,
    LOADING_PRODUCTS,
    GET_PRODUCTS,
    ERROR_PRODUCTS,
    SELECT_DELETE,
    DELETE_PRODUCT,
    ERROR_DELETE,
    SELECT_EDIT,
    EDIT_PRODUCT,
    ERROR_EDIT
} from '../types'

const initialState = {
    products: [],
    loading: false,
    error: false,
    productdelete: null,
    productdedit: null
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOADING_PRODUCT:
        case LOADING_PRODUCTS:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                error: false,
                loading: false,
                products: [...state.products, action.payload]
            }
        case ERROR_PRODUCT:
        case ERROR_PRODUCTS:
        case ERROR_DELETE:
        case ERROR_EDIT:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_PRODUCTS:
            return {
                ...state,
                error: false,
                loading: false,
                products: action.payload
            }
        case SELECT_DELETE:
            return {
                ...state,
                productdelete: state.products.filter(product => product.id === action.payload)[0]
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                error: false,
                products: state.products.filter(product => product.id !== state.productdelete.id),
                productdelete: null
            }
        case SELECT_EDIT:
            return {
                ...state,
                productdedit: state.products.filter(product => product.id === action.payload.id)[0]
            }
        case EDIT_PRODUCT:
            return {
                ...state,
                error: false,
                products: state.products.map(product => 
                    product.id === action.payload.id
                    ? action.payload
                    : product
                    ),
                productdedit: null
            }
        default:
            return state
    }
}

export default productReducer