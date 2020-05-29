import React from 'react'

function Product (props) {
  const product = props.product

  return (
    <div className='product-container'>
      <img src={product.img}></img>
      <div className='product-info'>
        <div className='info'>
          <p>{product.name}</p>
          <p>{`$${product.price}`}</p>
        </div>
        <div className='product-buttons'>
          <div className='delete-button'>Delete</div>
          <div className='edit-button'>Edit</div>
        </div>
      </div>
    </div>
  )
}

export default Product