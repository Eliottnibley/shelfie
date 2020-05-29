import React, { Component } from 'react';
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
      products: []
    }
  }

  componentWillMount () {
    Axios.get('/products')
    .then(res => {
      this.setState({products: res.data})
    })
    .catch(err => console.log('no read'))
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Form/>
        <Dashboard products={this.state.products}/>
      </div>
    );
  }
}

export default App;
