///Variables to get users to enter name and feelings
var name = prompt("What is your name?");
var feeling = prompt("How are you feeling?");

//Get date information
var today = new Date();
var date = (today.getMonth()+1) +"-"+ today.getDate()+"-"+today.getFullYear();
var time = today.getHours()+":" today.getMinutes();

//access specific elements quickly
document.getElementById("name").innerHTML = name;
document.getElementById("feeling").innerHTML = feeling;
document.getElementById("date").innerHTML = date;
document.getElementById("time").innerHTML = time;

//1st button function
function joke(){
	//random integer
	let randNum = Math.floor(Math.random() *4)
	
	//switch cases
	switch(randNum){
		case 1:
			alert("I hated facial hair but then it grew on me.");
			break;
		case 2:
			alert("It really takes guts to be an organ donor.");
			break;
		case 3:
			alert("What did the ocean say to the beach? Nothing, it just waved.");
			break;
		default:
			alert("Way to break the machine! You really are something");
	}
}


//2nd button function
function snakes(){
	//random integer
	let randNum = Math.floor(Math.random() *4)
	
	//switch cases
	switch(randNum){
		case 1:
			alert("Hairy Bush Viper");
			break;
		case 2:
			alert("Mojave Viper");
			break;
		case 3:
			alert("Anaconda");
			break;
		default:
			alert("Way to break the machine! You really are something");
	}
}		


//3rd button function
function insult(){
	//random integer
	let randNum = Math.floor(Math.random() *4)
	
	//switch cases
	switch(randNum){
		case 1:
			alert("Your face makes onions cry.");
			break;
		case 2:
			alert("It’s impossible to underestimate you.");
			break;
		case 3:
			alert("You are the human version of period cramps.");
			break;
		default:
			alert("Way to break the machine! You really are something");
	}
}


//4th button function
function advice(){
	//random integer
	let randNum = Math.floor(Math.random() *4)
	
	//switch cases
	switch(randNum){
		case 1:
			alert("Don’t ever stop learning and growing as a person.");
			break;
		case 2:
			alert("Save a portion of your earnings and avoid credit card debt.");
			break;
		case 3:
			alert("Be kind to people; treat people as you would like to be treated.");
			break;
		default:
			alert("Way to break the machine! You really are something");
	}
}


//5th button function
function medical(){
	//random integer
	let randNum = Math.floor(Math.random() *4)
	
	//switch cases
	switch(randNum){
		case 1:
			alert("Cardiovascular disease is the number 1 cause of death.");
			break;
		case 2:
			alert("Type 2 diabetes can be reversed with diet and exercise");
			break;
		case 3:
			alert("Our heart beats around 100,00 times every day or about 30 million times in a year.");
			break;
		default:
			alert("Way to break the machine! You really are something");
	}
}


