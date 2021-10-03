/* */

let sides = prompt("Jawless Snakes needs a number between 1-10.");
//Get and set a basic shape
document.getElementById("shapes").innerHTML = sides + " sided polygon"; 

function shapes() {
    //Get integer input for side
    sides = parseInt(prompt("How many sides do you want for your shape?")); s
    //check num of side and change text to match the number
    switch (sides) { 
        case 1:
            document.getElementById("shapes").innerHTML = "monogon";
            break;
        case 2:
            document.getElementById("shapes").innerHTML = "digon";
            break;
        case 3:
            document.getElementById("shapes").innerHTML = "trigon";
            break;
        case 4:
            document.getElementById("shapes").innerHTML = "tetragon";
            break;
        case 5:
            document.getElementById("shapes").innerHTML = "pentagon";
            break;
        case 6:
            document.getElementById("shapes").innerHTML = "hexagon";
            break;
        case 7:
            document.getElementById("shapes").innerHTML = "heptagon";
            break;
        case 8:
            document.getElementById("shapes").innerHTML = "octagon";
            break;
        case 9:
            document.getElementById("shapes").innerHTML = "enneagon";
            break;
        case 10:
            document.getElementById("shapes").innerHTML = "decagon";
            break;

        default: //tell user if input is incorrect and try again
            alert("Way to break the machine! Try Again! Need a number between 1 and 10.");
            shapes()
    }
}