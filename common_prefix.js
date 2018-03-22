// Give two words and find the common prefix
var ask = require('./getInput');

ask.getInput("Enter the first word : ", function(firstWord){
	ask.getInput("Enter the second word: ", function(secondWord){
		var index = 0;
		var temp = "";

		if (firstWord.length > secondWord.length){
			temp = firstWord;
			firstWord = secondWord;
			secondWord = temp;
		};

		if (firstWord.length <= secondWord.length) {
			while (index <= firstWord.length) {
				temp = firstWord.charAt(index);
				if (temp == secondWord.charAt(index)) {
					if (index < firstWord.length) {
						index++;					
					} else {
						console.log("The common prefix is " + firstWord.slice(0,index));
						break;
					};
				} else {
					console.log("The common prefix is " + firstWord.slice(0,index));
					break;
				};
			};
		}; 
		process.exit();
	});
});