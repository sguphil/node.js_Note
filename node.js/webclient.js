var http = require('http')

var options = {
	host: 'localhost',
	port: '8888',
	path: '/index.html'
}

var callback = function(response) {
	var body = ''
	response.on('data', function(data){
		body += data
	})
	
	response.on('end', function(){
		console.log("recv finish:" + body)
	})
}

var req = http.request(options, callback)
req.end()

