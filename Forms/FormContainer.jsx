import React, { Component } from 'react';
import { Input, Button } from './dumb_Component.jsx';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { fname: '', lname: '' }
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
    alert('hello ' + this.state.fname + ' ' + this.state.lname)
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="form-horizontal">
        <div className="form-group form-inline col-sm-12 p-3">
          <Input type='text' title="First Name:" name='fname' toappear={this.state.fname} placeholder='Enter your first name' handlechange={this.handleInput} />
        </div>
        <div className="form-group form-inline col-sm-12 p-3">
          <Input type='text' title="Last Name:" name='lname' toappear={this.state.lname} placeholder='Enter your last name' handlechange={this.handleInput} />
        </div>
        <Button name="btnOk" action={this.handleFormSubmit} type={'primary'} title={'Submit'} />
        <Button name="btnCancel" action={this.handleFormSubmit} type={'secondary'} title={'Cancel'} />
      </form>
    );
  }
}

export default FormContainer;
  