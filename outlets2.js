//outlets 2.0 specific functions
//nathreed jan 14
$(document).ready(function() {
function handler1() {
   $.get("/scripts/lighton.py?outlet=" + $(this).val())
//    alert(" handler 1");
    
    $(this).one("click", handler2);
}
function handler2() {
    $.get("/scripts/lightoff.py?outlet=" + $(this).val())
//    alert("handler 2")
    
    $(this).one("click", handler1);
}
function allh1() {
   $.get("/scripts/allon.py")


    $(this).one("click", allh2);
}

function allh2() {
   $.get("/scripts/alloff.py")


    $(this).one("click", allh1);
}
function allxm1() {
   $.get("/scripts/xmason.py")


    $(this).one("click", allxm2);
}

function allxm2() {
   $.get("/scripts/xmasoff.py")
   

    $(this).one("click", allxm1);
}
function allcol1() {
   
   $.get("/scripts/lighton.py?outlet=1");
   $.get("/scripts/lighton.py?outlet=2");
   
    $(this).one("click", allcol2);
}

function allcol2() {
   
   $.get("/scripts/lightoff.py?outlet=1");
   $.get("/scripts/lightoff.py?outlet=2");
   
    $(this).one("click", allcol1);
}
function allrm1() {
   
   $.get("/scripts/lighton.py?outlet=6");
   $.get("/scripts/lighton.py?outlet=7");
   
    $(this).one("click", allrm2);
}

function allrm2() {
   
   $.get("/scripts/lightoff.py?outlet=6");
   $.get("/scripts/lightoff.py?outlet=7");
   
    $(this).one("click", allrm1);
}
var checkStatus = function() {
	$.get('/scripts/readad.py', function(data) {
		
		if(data == 1) {
			$("#colorLight").html("<font color='#228b22'>Relays have power.</font>");
		}
		else if(data == 0) {
			$("#colorLight").html("<font color='red'>Relays do not have power.</font>");
		
		}
		else {
			$("#colorLight").html("An error ocurred in the script. It was initialized.");
		}
	});
	 
};

$("button.toggle").one("click", handler1);
$("button.toggle-all").one("click", allh1);
$("button.toggle-xmas").one("click", allxm1);
$("button.toggle-col").one("click", allcol1);
$("button.toggle-rm").one("click", allrm1);
checkStatus();
setInterval(checkStatus, 25000);
});
