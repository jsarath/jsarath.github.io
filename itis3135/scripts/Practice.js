var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {
	//item capp
	//add onclick event handler for each image
	document.getElementById("cappuccino").onclick=function(){
		document.getElementById("order").append('$3.45 - Cappuccino - Delicious Cappuccino.');
	// for click event add item to order and update total{
		total = (parseFloat(total) + parseFloat(3.45)).toFixed(2);
	// display order and total
		document.getElementById("total").innerHTML="<em>Total:"+total+" </em>";
	};


	//item espr
	//add onclick event handler for each image
	document.getElementById("espresso").onclick=function(){
		document.getElementById("order").append('$1.95 - Espresso - Delicious espresso. Wanna try it?');};
	// for click event add item to order and update total
	document.getElementById("espresso").onclick=function(){
		total = (parseFloat(total) + parseFloat(1.95)).toFixed(2);};
	// display order and total
	document.getElementById("espresso").onclick=function(){
		document.getElementById("total").innerHTML="<em>Total:"+total+" </em>";
	};

	
		
}; // end onload