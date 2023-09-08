// /*Exercise #4
// Objective: Understand the differences between Local and Global Scope.

// Instructions:

// Declare a global variable outside of any function.
// Create a function that tries to modify that global variable.
// Create another function that declares a local variable with the same name.
// Observe the behavior when calling both functions.
// Starting Code:

// // Declare a global variable here
let fullName= "Walker Theby";

function changeMyName() {
   fullName = "Paul Theby";

}
changeMyName();
console.log(fullName);

function changeMyNameAgain() {
    let fullName= "Mckenna Theby";
    console.log(fullName);
}
changeMyNameAgain();
changeMyName();

// Call both functions here */


//both undefined but unsure i did it correctly
