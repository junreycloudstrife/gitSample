// This function will ask for a number and then returns
// its factorial.

// This will require the getInput.js 
var askNumber = require('./getInput');

// This function will ask for a number and then display
// its factorial using the FirstFactorial function
ask.getInput("Factorial: ", function (data) {
	console.log(data + "! = " + FirstFactorial(data));
	process.exit();
});

// This function will provide the factorial of the
// variable num
function FirstFactorial(num) { 
  // code goes here
  var temp = 1;
  
  for (i=0;i<num;i++){
  	temp = temp * (num - i);
  }
  return num = temp;
};
