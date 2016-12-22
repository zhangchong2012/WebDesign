/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-15 20:32:24
 * @version $Id$
 */
$(document).ready(function() {
	initJs();
});

jQuery(document).ready(function($) {
	
});

function showMsg(){
	alert("this is a button!");
}

function showMsg2(){
	alert("this is second button~~~");
}

 function initJs(){
 	attachAction("input_button", showMsg);
 	attachAction("input_button2", showMsg2);
 	atttachToggle("#showmsg", "#pannel", toggleAction);
 }

 function attachAction(elementId, method){
 	document.getElementById(elementId).onclick = method;
 }

function toggleAction(tartgetId){
	$(tartgetId).toggle();
	tartgetId.toggle();
}

function atttachToggle(elementId, tartgetId, method) {
	// body...
	$(elementId).click(function(event) {
		method(tartgetId);
	});
}

 function attachSubmit(thisForm){
 	alert("form submit!");
 	setTimeout("alert('5 seconds!')",5000);
 	return false;
 }

