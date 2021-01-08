// IMPORT MODULES under test here:

import { getAdditionSum, getSubtractionSum, getMultiplicationSum, getDivisionSum } from '../utils.js';

const test = QUnit.test;

// getAdditionSum test

test('It should return 5 when provided 3 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getAdditionSum(3, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('It should return -5 when provided -10 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -5;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getAdditionSum(-10, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// getSubtractionSum test

test('It should return 1 when provided 2 and 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSubtractionSum(2, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



test('It should return -1 when provided 1 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSubtractionSum(1, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// getMultiplicationSum test

test('It should return 2 when provided 1 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMultiplicationSum(1, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('It should return -6 when provided -3 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -6;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMultiplicationSum(-3, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// getDivisionSum Test

test('It should return -6 when provided -12 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -6;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDivisionSum(-12, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('It should return 6 when provided 12 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 6;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getDivisionSum(12, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
