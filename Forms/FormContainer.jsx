import React, {Component} from 'react';  
import { Input, Button } from './dumd_Component.jsx';  

class FormContainer extends Component {  
  constructor(props) {
    super(props);
    this.state = { name: '' }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
       this.setState({
        [name]: value
      });
  }
  handleFormSubmit(e) {
    //do service call the save the data
  }   
  render() {
    return (
        <form onSubmit={this.handleFormSubmit}>
            <Input inputType={'text'} name= {'name'} value={this.state.name} placeholder = {'Enter your name'} 
                handleChange = {this.handleInput} /> 
          <Button action = {this.handleFormSubmit} type = {'primary'} title = {'Submit'} style={buttonStyle} /> 
        </form>
    );
  }}

export default FormContainer;
