function route(pathname, handlers, reponse, request)
{
	if (typeof handlers[pathname] === 'function')
	{
		return handlers[pathname](reponse, request)
	}
	else
	{
		console.log("Not fount!About to route a request for" + pathname);
		//return "404 Not found"
		response.writeHead(400, {"Content-Type": "text/plain"});
        	response.write("404 Not found");
        	response.end();
		
	}
}

exports.route = route

