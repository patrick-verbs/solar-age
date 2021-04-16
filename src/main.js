import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Example from './js/example.js';

const newExample = new Example(5);

$(document).ready(function() {
  console.log("The 'newExample' object's 'number' property: " + newExample.number);
});