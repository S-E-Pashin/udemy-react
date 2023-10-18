import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Header} from "./App";

// const elem = <h2>Hello World!!!</h2>;
// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!!!!');

// const text = "Hello World in 2023!";
//
// const elem = (
//   <div>
//     <h2>{text}</h2>
//     <input type="text"/>
//     <button></button>
//   </div>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App/>
);
