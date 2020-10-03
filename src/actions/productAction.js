import axiosClient from '../config/axiosClient'
import Swal from 'sweetalert2'
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


/**
 *  NewProduct
 */
export const addProductAction = product => {    
    return async dispatch => {
        dispatch(loadingProduct())

        try {
            const res = await axiosClient.post('/productos', product)
            dispatch(addProduct(res.data)) 
            
        } catch (error) {
            dispatch(errorProduct())
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un Error, intentalo de nuevo',
              })
        }
    }
}

const loadingProduct = () => ({
    type: LOADING_PRODUCT,
    payload: true
})

const addProduct = product => ({
    type: ADD_PRODUCT,
    payload: product
})

const errorProduct = () => ({
    type: ERROR_PRODUCT,
    payload: true
})


/**
 *  Products
 */
export const getProductsAction = () => {
    return async dispatch => {
        dispatch(loadingProducts())

        try {
            const res = await axiosClient.get('/productos')
            dispatch(getProducts(res.data))
            
        } catch (error) {
            dispatch(errorProducts())
        }
    }
}

const loadingProducts = () => ({
    type: LOADING_PRODUCTS,
    payload: true
})

const getProducts = products => ({
    type: GET_PRODUCTS,
    payload: products
})

const errorProducts = () => ({
    type: ERROR_PRODUCTS,
    payload: true
})


/**
 *  Delete product
 */
export const deleteProductAction = id => {
    return async dispatch => {
        dispatch(selectDelete(id))

        try {
            await axiosClient.delete(`/productos/${id}`)
            dispatch(deleteProduct())

            // Show alert
            Swal.fire({
                icon: 'success',
                title: 'Exito',
                text: 'El producto fue eliminado',
                showConfirmButton: false,
                timer: 1500
            })
            
        } catch (error) {
            dispatch(errorDelete())
        }
    }
}

const selectDelete = id => ({
    type: SELECT_DELETE,
    payload: id
})

const deleteProduct = () => ({
    type: DELETE_PRODUCT
})

const errorDelete = () => ({
    type: ERROR_DELETE,
    payload: true
})


/**
 *  Select Edit Product
 */
export const selectEditAction = product => {
    return dispatch => {
        dispatch(selectEdit(product))
    }
}

const selectEdit = product => ({
    type: SELECT_EDIT,
    payload: product
})


/**
 *  Edit product
 */
export const updateProductAction = product => {
    return async dispatch => {
        try {
            await axiosClient.put(`/productos/${product.id}`, product)
            dispatch(updateProduct(product))
            
        } catch (error) {
            dispatch(errorUpdate())
        }
    }
}

const updateProduct = product => ({
    type: EDIT_PRODUCT,
    payload: product
})

const errorUpdate = () => ({
    type: ERROR_EDIT,
    payload: true
})