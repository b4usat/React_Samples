import React from 'react';
import PropTypes from 'prop-types'
import ErrorMessage from '../src/error/errormessage'

const Button = (props) => {
  return (
    <button style={props.style} name={props.name} className={props.type == 'primary' ? 'btn btn-primary mx-3' : 'btn btn-secondary'} onClick={props.action} >
      {props.title}
    </button>)
}

Button.propTypes = {
  name: PropTypes.string.isRequired
}

const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label mx-3">{props.title}</label>
      <input className="form-control" id={props.name} name={props.name} type={props.type} value={props.toappear}
        onChange={props.handlechange} placeholder={props.placeholder}
      />
      <ErrorMessage name={props.name} handleError={props.handleerror} />
    </div>
  )
}

export { Button, Input };
