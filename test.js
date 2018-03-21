//https://www.npmjs.com/package/keypress

var keypress = require('keypress');
var text = '';
 
// make `process.stdin` begin emitting "keypress" events 
keypress(process.stdin);
 
// listen for the "keypress" event 
process.stdin.on('keypress', function (ch, key) {
  // console.log('got "keypress"', key);
  //console.log(key.name);
  // text = text + key.name;
  // console.log(text);

	// This part will detect if Enter key is pressed
	// if true then will break to next line and
	// diplay the content of text variable and
	// then will clear the content of text variable
	if (key.name == 'return') {
		console.log("\n" + text);
		text = '';
	// If the Enter key is not pressed then it just
	// display the character being typed while 
	// storing the characters to text variable
	} else {
		process.stdout.write(key.name);
 		text = text + key.name;
	}

	// This part will detect if 'Ctrl' + 'C' is being
	// pressed. If true then will exit the program. 
	if (key && key.ctrl && key.name == 'c') {
		process.stdin.pause();
	}
});
 
process.stdin.setRawMode(true);
process.stdin.resume();