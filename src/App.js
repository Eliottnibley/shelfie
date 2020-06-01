import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import './App.css';
import './components/Header/header.css'
import './components/Form/form.css'
import './components/Dashboard/dashboard.css'
import './components/Product/product.css'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Axios from 'axios';

class App extends Component {
  constructor () {
    super() 
    this.state = {
      products: [],
      type: 'Add to Inventory',
      productToEdit: {},
    }
    this.changeButton = this.changeButton.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.editMode = this.editMode.bind(this)
    this.editProduct = this.editProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
  }

  componentWillMount () {
    Axios.get('/products')
    .then(res => {
      this.setState({products: res.data})
    })
    .catch(err => console.log('no read'))
  }

  changeButton () {
    this.setState({type: 'Add to Inventory'})
  }

  editMode(id) {
    let index = -1
    for (let i =0; i < this.state.products.length; i++){
      if (this.state.products[i].id === id){
        index = i
        break
      }
    }
    let prod = this.state.products[index]
    this.setState({
      productToEdit: prod,
      type: 'Save Changes'
    })
  }

  getProducts () {
    Axios.get('/products')
    .then(res => {
      this.setState({products: res.data})
    })
    .catch(err => console.log('no read'))
  }

  addProduct (inputArray) {
    for (let i = 0; i < inputArray.length; i++){
      if (inputArray[i] === ''){
        return alert('All inputs must be filled with values')
      }
    }
    let newObj = {
      name: inputArray[1],
      price: inputArray[2],
      img: inputArray[0]
    }
    Axios.post('/products', newObj)
    .then(res => {
      console.log(res)
      this.getProducts()
    })
    .catch(err => {
      console.log(err)
    })
  }

  editProduct (inputArray) {
    if (inputArray[0] === ''){
      inputArray[0] = this.state.productToEdit.img
    }
    if (inputArray[1] === ''){
      inputArray[1] = this.state.productToEdit.name
    }
    if (inputArray[2] === ''){
      inputArray[2] = this.state.productToEdit.price
    }

    let newObj = {
      name: inputArray[1],
      price: inputArray[2],
      img: inputArray[0]
    }
    
    Axios.put(`/products/${this.state.productToEdit.id}`, newObj)
    .then(res => {
      console.log(res)
      this.getProducts()
    })
  }

  deleteProduct (id) {
    Axios.delete(`products/${id}`)
    .then(res => {
      console.log(res)
      this.getProducts()
    })
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header/>
          <Form editProduct={this.editProduct} productToEdit={this.state.productToEdit} addProduct={this.addProduct} changeButton={this.changeButton} type={this.state.type}/>
          <Dashboard deleteProduct={this.deleteProduct} editMode={this.editMode} products={this.state.products}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
