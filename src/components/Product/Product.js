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
          <div onClick={() => props.deleteProduct(product.id)} className='delete-button'>Delete</div>
          <div onClick={() => props.editMode(product.id)} className='edit-button'>Edit</div>
        </div>
      </div>
    </div>
  )
}

export default Product