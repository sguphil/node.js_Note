var http = require("http");
var url = require("url");
var formidable = require("formidable")

function start(route, handlers){
http.createServer(function(request, response){
	var pathname = url.parse(request.url).pathname;
	console.log("Request received." + pathname)
	route(pathname, handlers, response, request)
	/*
	var postData = ""
	request.addListener("data", function(postDataChunk){
		postData += postDataChunk;
		console.log("Received POST data chunk '" + postDataChunk + "'.");
	})
	request.addListener("end", function(){
		route(pathname, handlers, response, postData)
	})
	*/
}).listen(8888);

console.log("server has started.")
}

exports.start = start;

