//Outlets 3.0 JS 
//nathreed january 2015
var wsUri = "ws://your.server.ip.here:9213/";
var global_shouldSend;
//This function from a StackOverflow answer http://stackoverflow.com/a/14794066
function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}
$(document).ready(function() {
        //console.log("PAGE LOAD");
        setupWebSocket();
        
        function setupWebSocket() {
                websocket = new WebSocket(wsUri);
                websocket.onopen = function (evt) {console.log("Socket open")};
                websocket.onclose = function (evt) {console.log("Socket close")};
                websocket.onmessage = function (evt) {onMessage(evt.data);};
                websocket.onerror = function (evt) {console.log("Socket error")};
        }

        function onMessage(data) {
                //console.log("Message with data: " + data);
                var parsedInput = JSON.parse(data);
                var messageType = parsedInput.type
                if(messageType == "states") {
                        //The server has sent us the states of the lights. Let us update the images.
                        var statesArray = parsedInput.message;
                        var index;
                        global_shouldSend = 0;
                        for(index = 0; index < statesArray.length; ++index) {
                                var value = statesArray[index];
                                if(value == 1) {
                                        //The server has told us that the outlet at this index is on.
                                        $("#"+index).val('on').slider('refresh');
                                } else { //The server has told us that the outlet at this index is off.
                                        $("#"+index).val('off').slider('refresh');
                                }
                        }
                        global_shouldSend = 1;
                }
        }

        //The slider change function
        $( "select" ).change(function () {
                        var state;
                        var number;
                        state = $(this).val().toString();
                        number = parseInt($(this).attr('id'));
                        //console.log(state,number)
                        if(state == "on" && global_shouldSend == 1 && isInt(number)) {
                                var message = {type: "lightOn", message: number};
                                //websocket.send(JSON.stringify(message));
                                console.log("Sent: " + JSON.stringify(message));
                        } else if(state == "off" && global_shouldSend == 1 && isInt(number)) {
                                var message = {type: "lightOff", message: number};
                                websocket.send(JSON.stringify(message));
                                //console.log("Sent: " + JSON.stringify(message));
                        }
        });
    

});
