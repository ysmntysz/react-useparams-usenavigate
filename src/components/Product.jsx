import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product({product}) { 
  const navigate = useNavigate();
  return (
    <div className='product-card'>
      <h3>{product.name}</h3>
      <span>{product.price}</span>
      <button onClick={() => navigate("/product-details/" + product.id)}>detay</button>
    </div>
  )
}

export default Product
