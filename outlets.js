//outlet controller
	var lightOn = function(outlet) {
                $.get("/scripts/lighton.py?outlet=" + outlet);
        }

        var lightOff = function(outlet) {
                $.get("/scripts/lightoff.py?outlet=" + outlet);
        }

var allOn = function() {
	$.get("/scripts/allon.py");
}
var allOff = function() {
	$.get("/scripts/alloff.py");
}

var checkStatus = function() {
	$.get('/scripts/readad.py', function(data) {
		
		if(data == 1) {
			$("#relayStatus").html("<font color='lime'>Relays have power.</font>");
		}
		else if(data == 0) {
			$("#relayStatus").html("<font color='red'>Relays do not have power.</font>");
		
		}
		else {
			alert("else");
		}
	});
	 
};
