// Exercise #5
// Objective: Implement a Function Factory using Closures.

// Instructions:

// Design a function that accepts a parameter.
// The function should return another function that uses the parameter in some way.
// Starting Code:

function funcFactory(param) {
    return function () {
        console.log(param)
    }
    // Return a function that makes use of 'param'
}
funcFactory("Hello")();
// Create an instance of the inner function by invoking functionFactory with a parameter