// Give two words and find the common prefix
var ask = require('./getInput');

// // version 1
// ask.getInput("First Word: ", function(firstWord){
// 	ask.getInput("Second Word: ", function(secondWord){
// 		// console.log(firstWord + secondWord);
// 		var i = 0;
// 		var temp = "";

// 		if (firstWord.length < secondWord.length) {
// 			while (i <= firstWord.length) {
// 				temp = firstWord.charAt(i);
// 				if (temp == secondWord.charAt(i)) {
// 					i++;					
// 				} else {
// 					console.log("The long prefix is " + firstWord.slice(0,i));
// 					break;
// 				}
// 			}
// 		} else {
// 			while (i <= secondWord.length){
// 				temp = secondWord.charAt(i);
// 				if (temp == firstWord.charAt(i)) {
// 					i++;					
// 				} else {
// 					console.log("The long prefix is " + secondWord.slice(0,i));
// 					break;
// 				}
// 			}
// 		}
// 		process.exit();
// 	})
// })

// version 2
ask.getInput("Enter the first word : ", function(firstWord){
	ask.getInput("Enter the second word: ", function(secondWord){
		var index = 0;
		var temp = "";

		if (firstWord.length > secondWord.length){
			temp = firstWord;
			firstWord = secondWord;
			secondWord = temp;
		}

		if (firstWord.length <= secondWord.length) {
			while (index <= firstWord.length) {
				temp = firstWord.charAt(index);
				if (temp == secondWord.charAt(index)) {
					index++;					
				} else {
					console.log("The common prefix is " + firstWord.slice(0,index));
					break;
				}
			}
		} 
		process.exit();
	})
})


