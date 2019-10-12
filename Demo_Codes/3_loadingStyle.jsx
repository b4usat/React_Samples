
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css'

var i = 1;

const Element = () => {
  return (<div>
    <h1 className="hello">Hello Accenture</h1>
    <span style={{ color: 'blue', fontSize: '20px' }}>Span Inline style</span>
  </div>)
}


ReactDOM.render(
  <Element />,
  document.getElementById('root')
);


