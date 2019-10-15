
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css'

// class MyClass {
//   constructor(name) {
//       console.log("I am a MyClass object .. ", name);
//   }
// }
// const myclass = new MyClass('1234');

// const arr = [1, 2, 3]
// const output = arr.map(x => x + 1)
// console.log(output)

// const x = [1, 2, 3]
// const output = [...x, 4]
// console.log(output)



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


