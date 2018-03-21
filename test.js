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

  if (key.name == 'return') {
    console.log("\n" + text);
    text = '';
  } else {
  	process.stdout.write(key.name);
  	text = text + key.name;
  }

  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});
 
process.stdin.setRawMode(true);
process.stdin.resume();