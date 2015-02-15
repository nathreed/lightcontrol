var wpi = require('wiring-pi');
var ws = require("nodejs-websocket");

var states = [0,0,0,0,0,0,0,0]

wpi.wiringPiSetup();

var wsServer = ws.createServer(function(conn) {
	//console.log("New connection");
	//Send the welcome message with all the states
	var welcomeMessage = {type: "states", message: states};
	conn.sendText(JSON.stringify(welcomeMessage));
	
	conn.on("text", function(str) {
		var parsedInput = JSON.parse(str);
		var messageType = parsedInput.type;
		if(messageType == "lightOn") {
			//var message = JSON.parse(parsedInput.message);
			wpi.pinMode(parseInt(parsedInput.message), wpi.OUTPUT);
			states[parsedInput.message] = 1;
			var toBroadcast = {type: "states", message: states};
			broadcast(wsServer,JSON.stringify(toBroadcast));	
		} else if(messageType == "lightOff") {
			//var message = JSON.parse(parsedInput.message);
			wpi.pinMode(parseInt(parsedInput.message), wpi.INPUT);
			states[parsedInput.message] = 0;
			var toBroadcast = {type:"states", message:states};
			broadcast(wsServer,JSON.stringify(toBroadcast));
		}
	});
        //This is so the server doesn't crash
	conn.on("error", function(err) {
		console.log("Ignoring websocket server exception " + err);
	});
}).listen(9213);

function broadcast(server, message) {
	server.connections.forEach(function(conn) {
		conn.sendText(message);
	})
}


