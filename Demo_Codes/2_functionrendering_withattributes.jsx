
import React from 'react';
import ReactDOM from 'react-dom';

let i = 1;

const Element = () => {
  return (<div>
    <h1 className="hello">Hello Accenture</h1>
    <h2 sampleAttribute="sample">{i + 1}</h2>
  </div>)
}


ReactDOM.render(
  <Element />,
  document.getElementById('root')
);


