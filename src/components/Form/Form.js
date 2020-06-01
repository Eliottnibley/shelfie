import React, {Component} from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      userInput: ['', '', ''],
    }
  }

  handleInputChange (e, ind) {
    let inputArray = this.state.userInput
    inputArray[ind] = e.target.value
    this.setState({userInput: inputArray})
  }

  cancelInput () {
    this.props.changeButton()
    this.setState({userInput: ['', '', '']})
  }

  submit () {
    if (this.props.type === 'Add to Inventory'){
      this.props.addProduct(this.state.userInput)
    }
    else {
      this.props.editProduct(this.state.userInput)
    }
    this.cancelInput()
  }

  render () {
    if(this.props.type === 'Add to Inventory'){
      return (
        <div className='form-container'>
          <div className='image-container'>
            <img src={this.state.userInput[0]}></img>
          </div>
          <div className='input-info-container'>
            <div className='image-url'>
              <p>Image URL:</p>
            </div>
            <input value={this.state.userInput[0]} onChange={(e) => this.handleInputChange(e, 0)} className='url-input'></input>
            <div className='product-name'>
              <p>Product Name:</p>
            </div>
            <input value={this.state.userInput[1]} onChange={(e) => this.handleInputChange(e, 1)}  className='name-input'></input>
            <div className='price'>
              <p>Price:</p>
            </div>
            <input value={this.state.userInput[2]} onChange={(e) => this.handleInputChange(e, 2)}  className='price-input'></input>
          </div>
          <div className='form-button-container'>
            <div onClick={() => this.cancelInput()} className='cancel-button'>Cancel</div>
            <div onClick={() => this.submit()} className='submit-button'>{this.props.type}</div>
          </div>
        </div>
      )
    }
    else {
      if(this.props.productToEdit){
        let prod = this.props.productToEdit
        
        return (
          <div className='form-container'>
            <div className='image-container'>
              <img src={this.state.userInput[0]}></img>
            </div>
            <div className='input-info-container'>
              <div className='image-url'>
                <p>Image URL:</p>
              </div>
              <input placeholder={prod.img} onChange={(e) => this.handleInputChange(e, 0)} className='url-input'></input>
              <div className='product-name'>
                <p>Product Name:</p>
              </div>
              <input placeholder={prod.name} onChange={(e) => this.handleInputChange(e, 1)}  className='name-input'></input>
              <div className='price'>
                <p>Price:</p>
              </div>
              <input placeholder={prod.price} onChange={(e) => this.handleInputChange(e, 2)}  className='price-input'></input>
            </div>
            <div className='form-button-container'>
              <div onClick={() => this.cancelInput()} className='cancel-button'>Cancel</div>
              <div onClick={() => this.submit()} className='submit-button'>{this.props.type}</div>
            </div>
          </div>
        )
      }
    }
  }
}

export default Form 