// This getInput function will display the question and then
// ask the users for the answer. Once the user enters the 
// answer will then callback to an external function with the
// answer provided by the user
module.exports = {
	getInput: function(question, callback) {
		var stdin = process.stdin;
		var stdout = process.stdout;

		stdin.resume();
		stdout.write(question);

		stdin.once('data', function(data) {
			data = data.toString().trim();
			callback(data);
		});
	}
}

// // source: http://st-on-it.blogspot.com/2011/05/how-to-read-user-input-with-nodejs.html

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
 
// process.stdin.on('data', function (chunk) {
//  process.stdout.write('data: ' + chunk);
// });

// ***********************************************
// function ask(question, format, callback) {
//  var stdin = process.stdin, stdout = process.stdout;
 
//  stdin.resume();
//  stdout.write(question + ": ");
 
//  stdin.once('data', function(data) {
//    data = data.toString().trim();
 
//    if (format.test(data)) {
//      callback(data);
//    } else {
//      stdout.write("It should match: "+ format +"\n");
//      ask(question, format, callback);
//    }
//  });
// }

// ask("Name", /.+/, function(name) {
//   ask("Email", /^.+@.+$/, function(email) {
//     console.log("Your name is: ", name);
//     console.log("Your email is:", email);
 
//     process.exit();
//   });
// });


// // source: https://nodejs.org/api/process.html#process_process_stdin
// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//   const chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
// });

// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });


// // trial and error but did not work
// function input(type, callback){
// //	process.stdin.resume();
// 	process.stdin.setEncoding('utf8');
// 	process.stdout.write(type + ': ');
// 	process.stdin.on('readable', () => {
// 	  const chunk = process.stdin.read();
// 	  if (chunk !== null) {
// 	    // process.stdout.write(`data: ${type} ${chunk}`);
// 	    // process.exit();
// 		callback(chunk);
// 		//console.log(chunk + ' console');
// 	  }
// 	});
// }

// input("First Name", function(firstName){
// 	console.log(firstName);
// 	input("Last Name", function(lastName){
// 		console.log(lastName);
// 		process.exit();
// 		//process.stdin.resume();		
// //		console.log('Full Name: ' + name + ' ' + lastName);
// 	})
// 	//process.exit();
// });


// function ask(question, callback) {
// 	var stdin = process.stdin;
// 	var stdout = process.stdout;

// 	stdin.resume();
// 	stdout.write(question + ": ");

// 	stdin.once('data', function(data) {
// 		data = data.toString().trim();
// 		callback(data);
// 	});
// }

// ask("Name", function(name) {
// 	ask("Email", function(email) {
// 		console.log("Your name is: ", name);
// 		console.log("Your email is:", email);

// 		process.exit();
// 	});
// });

