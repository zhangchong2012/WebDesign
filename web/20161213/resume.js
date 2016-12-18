/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-15 20:32:24
 * @version $Id$
 */

 function initJs(){
 	attachAction("input_button", showMsg);
 	attachAction("input_button2", showMsg2);
 }

 function attachAction(elementId, method){
 	document.getElementById(elementId).onclick = method;

 }

 function attachSubmit(thisForm){
 	alert("form submit!");
 	setTimeout("alert('5 seconds!')",5000);
 	return false;
 }

function showMsg(){
	alert("this is a button!");
}

function showMsg2(){
	alert("this is second button~~~");
}