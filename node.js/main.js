var fs = require("fs")

//sync way 
var data = fs.readFileSync("input.txt")

console.log("sync way======" + data.toString())
console.log("Program Ended")

fs.readFile('input.txt', function(err, data){
	if (err) return console.error(err)
	console.log("async way=====" + data.toString())
})

console.log("Program Ended")


