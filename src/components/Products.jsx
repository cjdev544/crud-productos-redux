import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from '../actions/productAction'
import Product from '../components/Product'

const Products = () => {

   // Get productts state
   const productsState = useSelector(state => state.products)
   const { error, products } = productsState

   // useDispatch of products actions
   const dispatch = useDispatch()
   const getProducts = () => dispatch(getProductsAction())

   // useEffect
   useEffect( () => {
        getProducts()
        // eslint-disable-next-line
   }, [])

    return ( 
        <>
            <h2 className="text-center my-5">Listado de Productos</h2>

            { error ? <p className="alert alert-danger text-center text-uppercase p2 mt-4">Hubo un error en el servidor</p> : null }
            
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length === 0 ? null :
                        products.map(product => (
                            <Product
                                key={product.id}
                                product={product}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
     );
}
 
export default Products;