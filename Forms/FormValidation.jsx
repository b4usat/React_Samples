import React, { Component } from 'react';
import { Input, Button } from './dumb_component _validation';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      formerrors: []
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value
    }, () => {
      this.validateField(name, value)
    });
  }

  handleErrors(fieldName) {
    const obj = this.state.formerrors.find(x => x.field == fieldName)
    if (obj)
      return obj.errormesage;
    return '';
  }

  validateField(fieldName, value) {
    this.setState({ formerrors: [] })
    switch (fieldName.toLowerCase()) {
      case 'fname':
        if (value.length <= 3)
          this.setState({ formerrors: [...this.state.formerrors, { field: [fieldName], errormesage: 'First name is too short' }] })
          if (value.length >= 7)
          this.setState({ formerrors: [...this.state.formerrors, { field: [fieldName], errormesage: 'First name exceeds allowed limit of 7' }] })
        break;
      case 'lname':
        if (value.length <= 5)
          this.setState({ formerrors: [...this.state.formerrors, { field: [fieldName], errormesage: 'Last name is too short' }] })
        break;
    }
  }

  handleFormSubmit(e) {
    alert('hello ' + this.state.fname + ' ' + this.state.lname)
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className="form-horizontal">
        <div className="form-group form-inline col-sm-12 p-3">
          <Input type='text' title="First Name:" name='fname' toappear={this.state.fname}
            placeholder='Enter your first name' handlechange={this.handleInput} handleerror={this.handleErrors} />
        </div>
        <div className="form-group form-inline col-sm-12 p-3">
          <Input type='text' title="Last Name:" name='lname' toappear={this.state.lname}
            placeholder='Enter your last name' handlechange={this.handleInput} handleerror={this.handleErrors} />
        </div>
        <Button name="btnOk" action={this.handleFormSubmit} type={'primary'} title={'Submit'} />
        <Button name="btnCancel" action={this.handleFormSubmit} type={'secondary'} title={'Cancel'} />
      </form>
    );
  }
}

export default FormContainer;
