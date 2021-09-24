///Variables to get users to enter name and feelings
let name = prompt("What is your name?");
let feeling = prompt("How are you feeling?");

//Get date information
let today = new Date();
let date = (today.getMonth()+1) +"-"+ today.getDate()+"-"+today.getFullYear();
let time = today.getHours()+":" today.getMinutes();

//access specific elements quickly
document.getElementById("name").innerHTML = name;
document.getElementById("feeling").innerHTML = feeling;
document.getElementById("date").innerHTML = date;
document.getElementById("time").innerHTML = time;

//1st button function
