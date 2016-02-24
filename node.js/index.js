var server = require("./server")
var route = require("./route")
var reqHandler = require("./requestHandlers")

var handle = {}

handle["/"] = reqHandler.start;
handle["/start"] = reqHandler.start;
handle["/upload"] = reqHandler.upload;
handle["/show"] = reqHandler.show;

server.start(route.route, handle)


