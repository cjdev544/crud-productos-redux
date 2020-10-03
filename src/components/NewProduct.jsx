import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductAction } from '../actions/productAction'
import { showAlertAction, hideAlertAction } from '../actions/alertAction'
import Swal from 'sweetalert2'

const NewProduct = ({ history }) => {

    // Form State
    const [ name, setName ] = useState('')
    const [ price, setPrice ] = useState('')

    // products state
    const products = useSelector(state => state.products)
    const { loading, error } = products

    // alert state
    const alertState = useSelector(state => state.alerts.alert)

    // useDispatch
    const dispatch = useDispatch()
    const addProduct = product => dispatch(addProductAction(product))

    // Form Submit
    const formSubmit = e => {
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

        // Add product
        addProduct({
            name, 
            price
        })

        // Show alert
        Swal.fire({
            icon: 'success',
            title: 'Exito',
            text: 'El producto fue agregado',
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
                            Agregar Nuevo Producto
                        </h2>
                        
                        { alertState ? <p className={alertState.class}>{alertState.msg}</p> : null }

                        <form
                            onSubmit={ formSubmit }
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="name"
                                    value={name}
                                    onChange={ e => setName(e.target.value) }
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
                                    onChange={ e => setPrice(Number(e.target.value)) }
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary fonrt-weigth-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                        { error ? <p className="alert alert-danger text-center text-uppercase p2 mt-4">Hubo un error</p> : null }
                        { loading ? <p>Cargando...</p> : null }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProduct;