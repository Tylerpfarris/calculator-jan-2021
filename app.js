

// initialize state

// set event listeners to update state and DOM



const clearButton = document.getElementById('clear-button')
const addButton = document.getElementById('add-button')
const subtractButton = document.getElementById('subtract-button')
const multiplyButton = document.getElementById('multiply-button')
const divideButton = document.getElementById('divide-button')




import { addClickHandler, subtractClickHandler, multiplyClickHandler, divisionClickHandler, clearClickHandler } from './handlers.js';

//clear button

clearButton.addEventListener('click', clearClickHandler);

//addition button

addButton.addEventListener('click', addClickHandler);

//subtraction button

subtractButton.addEventListener('click', subtractClickHandler);

//multiplication button

multiplyButton.addEventListener('click', multiplyClickHandler);


//division button 

divideButton.addEventListener('click', divisionClickHandler);
