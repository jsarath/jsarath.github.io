/**
 * I did this on my own
 * Jimmy Sarath
 */

let sides = prompt("Jawless Snakes needs a number between 1-10.");
//Get and set a basic shape
document.getElementById("shape").innerHTML = sides + " sided polygon"; 

function shape() {
    //Get integer input for side
    sides = parseInt(prompt("How many sides do you want for your shape?"));
    //round and absolute
    sides = Math.round(Math.abs(sides));
    //check num of side and display shape
    switch (sides) { 
        case 1:
            document.getElementById("shape").innerHTML = "Monogon";
            break;
        case 2:
            document.getElementById("shape").innerHTML = "Digon";
            break;
        case 3:
            document.getElementById("shape").innerHTML = "Trigon";
            break;
        case 4:
            document.getElementById("shape").innerHTML = "Tetragon";
            break;
        case 5:
            document.getElementById("shape").innerHTML = "Pentagon";
            break;
        case 6:
            document.getElementById("shape").innerHTML = "Hexagon";
            break;
        case 7:
            document.getElementById("shape").innerHTML = "Heptagon";
            break;
        case 8:
            document.getElementById("shape").innerHTML = "Octagon";
            break;
        case 9:
            document.getElementById("shape").innerHTML = "Enneagon";
            break;
        case 10:
            document.getElementById("shape").innerHTML = "Decagon";
            break;

        default: //tell user if input is incorrect and ask again
            alert("Way to break the machine! Try Again! Need a number between 1 and 10.");
            shape();
    }
}