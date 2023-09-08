// Exercise 3: Objective: Implement Closures in JavaScript.

// Instructions:

// Develop a JavaScript function that returns another function.
// The inner function should have access to variables from the outer function's scope.

function func1() {
    const myVar= "Hello"
    function func2() {
       console.log(myVar);
    }
    func2();
}
func1();

//i created a function with a variable and then another function that will consoloe log the variable in the first function. 
//i then call the second function, and run it all with func1