var _ = require('lodash');

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer:', _.without(array, 3));


function currentTime() {
	var currentDate = new Date();
	document.getElementById("container").innerHTML = 
	currentDate.getHours() + "h" + ":" + currentDate.getMinutes() + "m" + 
	":" +currentDate.getSeconds() + "s";
}
setInterval(currentTime, 1000);
