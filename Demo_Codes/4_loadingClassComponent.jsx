
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css'

class Element extends React.Component {
 
  render() {
    return (<div>
      <h1 className="hello">Hello I am from Class Component</h1>
    </div>)
  }
}


ReactDOM.render(
  <Element />,
  document.getElementById('root')
);


