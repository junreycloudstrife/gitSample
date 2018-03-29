// This program will ask for 3 integers than identify the largest.

// This will require the getInput.js 
var askNumber = require('./getInput');

// This function will ask the user to provide the 3 integers
askNumber.getInput("1st Integer: ", function(firstNum){
	askNumber.getInput("2nd Integer: ", function(secondNum){
		askNumber.getInput("3rd Integer: ", function(thirdNum){
			console.log("The largest integer is " + largestInteger(firstNum,secondNum,thirdNum))
			process.exit();
		})
	})
})

// This function will compare the 3 integers and returns the largest
// The Number() will treat the integers as numbers
function largestInteger(num1, num2, num3){
	if (Number(num1) > Number(num2)){
		if (Number(num1) > Number(num3)) {
			return num1;
		} else { // num1 < num3
			return num3;
		}
	} else { // num1 < num2
		if (Number(num2) > Number(num3)) {
			return num2;
		} else { // num2 < num3
			return num3;
		}
	}
}