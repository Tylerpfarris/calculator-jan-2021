

// initialize state

// set event listeners to update state and DOM




const addButton = document.getElementById('add-button')
const subtractButton = document.getElementById('subtract-button')
const multiplyButton = document.getElementById('multiply-button')
const divideButton = document.getElementById('divide-button')

//addition button


import { addClickHandler, subtractClickHandler, multiplyClickHandler, divisionClickHandler } from './handlers.js';

addButton.addEventListener('click', addClickHandler);

//subtraction button

subtractButton.addEventListener('click', subtractClickHandler);

//multiplication button

multiplyButton.addEventListener('click', multiplyClickHandler);


//division button 

divideButton.addEventListener('click', divisionClickHandler);
