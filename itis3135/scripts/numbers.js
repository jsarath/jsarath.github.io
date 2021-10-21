/**
 * I did this on my own
 * Jimmy Sarath
 */


function shape(sides) {
    
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
            break;
            
    }
    //Function to validate the entry numberofsides
    function validateEntry(sides) {
    if(isNaN(sides) || sides > 10) {
        alert("Need a number: 1-10")
        sides = prompt("Jawless Snakes needs a number between 1-10.");
        shape(sides);
    } else if (sides < 0) {
        sides = Math.abs(sides);
    } else if (sides % 1 != 0) {
        sides = Math.round(sides);
    }
    return sides;
}
    //Get integer input for side
    var sides = prompt("Jawless Snakes needs a number between 1-10.");
    
    //call functions
    var valid = validateEntry(sides);
    shape(valid);
}