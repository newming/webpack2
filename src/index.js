import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

$(function () {
  console.log('cool');
})

import App from './App';
import './main.css';

ReactDOM.render(<App />, document.getElementById('root'))
