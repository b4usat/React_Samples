import React from 'react';

const Button = (props) => {
	console.log(props.style);
	return(
	<button 
		style= {props.style} 
		className = {props.type=='primary'? 'btn btn-primary' : 'btn btn-secondary'}
		onClick= {props.action} > 
		{props.title} 
	</button>)
}

const Input = (props) => {
	return (  
  <div className="form-group">
    <label for={props.name} className="form-label">{props.title}</label>
    <input
      className="form-control"
      id={props.name}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} 
      {...props} />
  </div>
)}

export { Button, Input };
