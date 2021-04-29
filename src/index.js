import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

//store --globalized sate

//action increment 
const increment = () =>{
  return {
    type:'INCREMENT'
  }
}

const decrement = () =>{
  return {
    type:'DECREMENT'
  }
}

//reducer

const counter = (state = 0, action) =>{
  switch(action.type){
    case  "INCREMENT" :
      return state + 1
    case "DECREMENT":
      return state - 1
  }
}


//dispatch


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
