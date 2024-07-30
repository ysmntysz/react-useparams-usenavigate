import React from 'react'
import data from "../data/product.json"
import Product from '../components/Product'

function Products() {
  return (
    <>
      <div>
        {
          data && data.map((product) => (
            <Product key={product.id} product={product}/>
          ))
        }
      </div>
    </>
  )
}

export default Products
