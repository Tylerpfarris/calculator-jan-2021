// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const addButton = document.getElementById('add-button')
const subtractButton = document.getElementById('subtract-button')
const multiplyButton = document.getElementById('multiply-button')
const divideButton = document.getElementById('divide-button')
const Field1 = document.getElementById('input-1')
const Field2 = document.getElementById('input-2')
const sum = document.getElementById('sumField')

addButton.addEventListener('click', () => {

  const fieldValue1 = Field1.valueAsNumber;
  const fieldValue2 = Field2.valueAsNumber;

  const sum = fieldValue1 + fieldValue2;

  sumField.textContent = sum;
});

subtractButton.addEventListener('click', () => {

  const fieldValue1 = Field1.valueAsNumber;
  const fieldValue2 = Field2.valueAsNumber;

  const sum = fieldValue1 - fieldValue2;

  sumField.textContent = sum;
});

multiplyButton.addEventListener('click', () => {

  const fieldValue1 = Field1.valueAsNumber;
  const fieldValue2 = Field2.valueAsNumber;

  const sum = fieldValue1 * fieldValue2;

  sumField.textContent = sum;
});

divideButton.addEventListener('click', () => {

  const fieldValue1 = Field1.valueAsNumber;
  const fieldValue2 = Field2.valueAsNumber;

  const sum = fieldValue1 / fieldValue2;

  sumField.textContent = sum;
});

