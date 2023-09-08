//Given the code snippet. Explain what scopes are in this current context of the code.

// Starting Code:

function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?   YES , inner has access to outer but not the other way around
		console.log(innerVar); // Can we access innerVar?   YES , same scope level, access!
	}

	innerFunction();  
}

outerFunction(); //this sets in motion the entire chain including inner function which will
//console log the outerVar and then innerVar both of which it has access to because it's on the same scope  and inside the 
//outFunction