import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction, updateProductAction } from '../actions/productAction'
import { showAlertAction, hideAlertAction } from '../actions/alertAction'
import Swal from 'sweetalert2'

const UpdateProduct = ({ history }) => {

    // Form state
    const [ product, setProduct ] = useState({
        name: '',
        price: ''
    })
    const { name, price } = product

    // useDispatch
    const dispatch = useDispatch()

    // Get values of product state
    const products = useSelector(state => state.products)
    const { error, productdedit } = products

    // alert state
    const alertState = useSelector(state => state.alerts.alert)

    useEffect( () => {
        setProduct(productdedit)
    }, [productdedit])

    if(!productdedit) {
        history.push('/')
        return null
    }

    // onSubmit Form 
    const onSubmitForm = e => {
        e.preventDefault()

        // Form validation    
        if(name.trim() === '' ) {
            const alert = {
                msg: 'El nombre es obligatorio',
                class: 'alert alert-danger text-center text-uppercase p2 mt-4'
            }
            dispatch(showAlertAction(alert))
            return
        }   
        if(price <= 0) {
            const alert = {
                msg: 'El precio debe ser mayor a 0',
                class: 'alert alert-danger text-center text-uppercase p2 mt-4'
            }
            dispatch(showAlertAction(alert))
            return
        }

        // Hide alert 
        dispatch(hideAlertAction())

        // Update product
        dispatch(updateProductAction(product))
        dispatch(getProductsAction())

        // Show alert success
        Swal.fire({
            icon: 'success',
            title: 'Exito',
            text: 'El cambio fue realizado',
            showConfirmButton: false,
            timer: 1500
          })

        // Redirect to Products
        history.push('/')
    }


    return (  
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        { alertState ? <p className={alertState.class}>{alertState.msg}</p> : null }

                        <form
                            onSubmit={ onSubmitForm }
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="name"
                                    value={name}
                                    onChange={ e => setProduct({
                                        ...product,
                                        name: e.target.value}) }
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="price"
                                    value={price}
                                    onChange={ e => setProduct({
                                        ...product,
                                        price: Number(e.target.value)}) }
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary fonrt-weigth-bold text-uppercase d-block w-100"
                            >Guardar Cambios</button>
                        </form>
                        { error ? <p className="alert alert-danger text-center text-uppercase p2 mt-4">Hubo un error en el servidor</p> : null }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default UpdateProduct;