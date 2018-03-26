// This file includes several samples of getting user inputs

var ask = require('./getInput');

// // Asking for name and email sample
// ask.getInput("Name", function(name) {
// 	ask.getInput("Email", function(email) {
// 		console.log("Your name is: ", name);
// 		console.log("Your email is:", email);

// 		process.exit();
// 	});
// });


// // Asking for name, age and address sample
// ask.getInput("What is your name?: ", function(name){
// 	ask.getInput("How old are you?: ", function(age){
// 		ask.getInput("Where do you live?: ", function(address){
// 			console.log("\nName: " + name);
// 			console.log("Age: " + age);
// 			console.log("Adress: " + address);
// 			process.exit();
// 		})
// 	})
// })

// // Get two (2) numbers and compare which is greater
// ask.getInput("First number: ", function(firstNum){
// 	ask.getInput("Second number: ", function(secondNum){
// 		//console.log(Number(firstNum) + Number(secondNum));
// 		if (firstNum > secondNum) {
// 			console.log(firstNum + " is greater than " + secondNum);
// 		} else {
// 			console.log(secondNum + " is greater than " + firstNum);
// 		}
// 		process.exit();
// 	})
// })

// Give two words and find the long prefix
ask.getInput("First Word : ", function(firstWord){
	ask.getInput("Second Word: ", function(secondWord){
		// console.log(firstWord + secondWord);
		var i = 0;
		var temp = "";

		if (firstWord.length < secondWord.length) {
			while (i <= firstWord.length) {
				temp = firstWord.charAt(i);
				if (temp == secondWord.charAt(i)) {
					i++;					
				} else {
					console.log("The long prefix is " + firstWord.slice(0,i));
					break;
				}
			}
		} else {
			while (i <= secondWord.length){
				temp = secondWord.charAt(i);
				if (temp == firstWord.charAt(i)) {
					i++;					
				} else {
					console.log("The long prefix is " + secondWord.slice(0,i));
					break;
				}
			}
		}
		process.exit();
	})
})