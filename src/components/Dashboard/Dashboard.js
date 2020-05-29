import React from 'react'
import Product from '../Product/Product'

function Dashboard (props) {
  const products = props.products
  const productArray = products.map(elem => <Product key={elem.id} product={elem}/>)

  return (
    <div className='dashboard-container'>
      {productArray}
    </div>
  )
}

export default Dashboard