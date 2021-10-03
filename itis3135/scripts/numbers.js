let sides = prompt("Jawless Snakes needs a number between 1-10.");
//Get and set a basic shape
document.getElementById("shape").innerHTML = sides + " sided polygon"; 

function shape() {
    //Get integer input for side
    sides = parseInt(prompt("How many sides do you want for your shape?"));
    //check num of side and display shape
    switch (sides) { 
        case 1:
            document.getElementById("shape").innerHTML = "monogon";
            break;
        case 2:
            document.getElementById("shape").innerHTML = "digon";
            break;
        case 3:
            document.getElementById("shape").innerHTML = "trigon";
            break;
        case 4:
            document.getElementById("shape").innerHTML = "tetragon";
            break;
        case 5:
            document.getElementById("shape").innerHTML = "pentagon";
            break;
        case 6:
            document.getElementById("shape").innerHTML = "hexagon";
            break;
        case 7:
            document.getElementById("shape").innerHTML = "heptagon";
            break;
        case 8:
            document.getElementById("shape").innerHTML = "octagon";
            break;
        case 9:
            document.getElementById("shape").innerHTML = "enneagon";
            break;
        case 10:
            document.getElementById("shape").innerHTML = "decagon";
            break;

        default: //tell user if input is incorrect and ask again
            alert("Way to break the machine! Try Again! Need a number between 1 and 10.");
            shape();
    }
}