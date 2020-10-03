import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteProductAction, selectEditAction } from '../actions/productAction'
import Swal from 'sweetalert2'

const Product = ({ product }) => {

   const { name, price } = product

   // useDispatch
   const dispatch = useDispatch()

   // useHistory
   const history = useHistory()

   // onClick delete product
   const deleteProduct = id => {
        Swal.fire({
            title: '¿Deseas eliminar el producto?',
            text: "Los productos eliminados no pueden ser recuperados",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {

                // Delete 
                dispatch(deleteProductAction(id))
            }
        })
   }

   // onClick edit product
   const editProduct = product => {
       dispatch(selectEditAction(product))
       // redirect to edit
       history.push(`/productos/editar/${product.id}`)
   }

    
    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">$ {price}</span></td>
            <td className="acciones">
                <button
                    className="btn btn-primary mr-2"
                    onClick={ () => editProduct(product) }
                >Editar</button>
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={ () => deleteProduct(product.id) }
                >Eliminar</button>
            </td>
        </tr>
     );
}
 
export default Product;