// Source: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php
// console.log("Write a JavaScript program to display the current day and time in the following format.");
// console.log("Today is : Friday."); 
// console.log("Current time is : 4 PM : 50 : 22") 


var date = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today is : " + days[date.getDay()] + ".");
console.log("Current time is : " + hour() + " : " + date.getMinutes() + " : " + date.getSeconds());

function hour(){
	if (date.getHours()>=12){
		return date.getHours()-12 + " PM"
	} else {
		return date.getHours() + " AM"
	}
}