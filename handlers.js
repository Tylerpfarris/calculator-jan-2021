import { getAdditionSum, getSubtractionSum, getMultiplicationSum, getDivisionSum } from './utils.js';



const Field1 = document.getElementById('input-1')
const Field2 = document.getElementById('input-2')
const sumField = document.getElementById('sum-field')

//addition button

export function addClickHandler() {

    const fieldValue1 = Field1.valueAsNumber;
    const fieldValue2 = Field2.valueAsNumber;

    const sum = getAdditionSum(fieldValue1, fieldValue2)

    sumField.textContent = sum;

};

//subtraction button

export function subtractClickHandler() {

    const fieldValue1 = Field1.valueAsNumber;
    const fieldValue2 = Field2.valueAsNumber;

    const sum = fieldValue1 - fieldValue2;

    sumField.textContent = sum;

};

export function multiplyClickHandler() {

    const fieldValue1 = Field1.valueAsNumber;
    const fieldValue2 = Field2.valueAsNumber;

    const sum = fieldValue1 * fieldValue2;

    sumField.textContent = sum;
};

//division button 

export function divisionClickHandler() {

    const fieldValue1 = Field1.valueAsNumber;
    const fieldValue2 = Field2.valueAsNumber;

    const sum = fieldValue1 / fieldValue2;

    sumField.textContent = sum;
};

