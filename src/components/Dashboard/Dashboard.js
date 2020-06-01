import React from 'react'
import Product from '../Product/Product'

function Dashboard (props) {
  const products = props.products

  if (products) {
    const productArray = products.map(elem => <Product deleteProduct={props.deleteProduct} editMode={props.editMode} key={elem.id} product={elem}/>)

    return (
      <div className='dashboard-container'>
        {productArray}
      </div>
    )
  }
  else {
    return (
      <div className='dashboard-container'>
        
      </div>
    )
  }
}

export default Dashboard