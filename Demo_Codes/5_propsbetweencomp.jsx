
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css'

class Element extends React.Component {
  
  render() {
    return (<div>
      <h1 className="hello">I am still in Parent</h1>
      <ChildElement message="Hi from Child component" />
    </div>)
  }
}

class ChildElement extends React.Component {
  
  render() {
    //console.log(this.props.hello)
    return (<div>
      <h1 className="childhello">{this.props.message}</h1>
    </div>)
  }

}


ReactDOM.render(
  <Element />,
  document.getElementById('root')
);


