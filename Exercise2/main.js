//Exercise 2-Objective: Apply Hoisting Correctly in a JS Project.

//Instructions:

///Draft a JavaScript function where you call a function before its declaration.
///Analyze the behavior and understand how hoisting impacts the outcome.
//Starting Code:

function mainFunction() {
	hoistedFunc();
function hoistedFunc() {
    console.log("Hello!");
}
	// Now, declare the hoistedFunction below
}

mainFunction();

///above i took the starting code and added the calling of the hoistedFunc first and then declared the hoistedFunc
//with a console log as the functions action to check to see if it worked and it did. Hello!