import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/product.json"
import Product from '../components/Product';

function ProductDetails() {
    const { id } = useParams();

    return (
        <>
        <div>
            {
                data && data.map((product) => {
                    if(product.id == id){
                        return <Product product={product}/>
                    }
                })
            }
        </div>
        </>
    )
}

export default ProductDetails
