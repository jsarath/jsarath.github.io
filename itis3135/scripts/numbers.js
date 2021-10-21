/**
 * I did this on my own
 * Jimmy Sarath
 */

function getShape(num) {
    
    switch (num) { 
        case 1:
            alert ("A polygon with 1 side is called a Monogon");
            break;
        case 2:
            alert ("A polygon with 2 side is called a digon");
            break;
        case 3:
            alert ("A polygon with 3 side is called a Trigon");
            break;
        case 4:
            alert ("A polygon with 4 side is called a Tetragon");
            break;
        case 5:
            alert ("A polygon with 5 side is called a Pentagon");
            break;
        case 6:
            alert ("A polygon with 6 side is called a Hexagon");
            break;
        case 7:
            alert ("A polygon with 7 side is called a Heptagon");
            break;
        case 8:
            alert ("A polygon with 8 side is called a Octagon");
            break;
        case 9:
            alert ("A polygon with 9 side is called a Enneagon");
            break;
        case 10:
            alert ("A polygon with 10 side is called a Decagon");
            break;

        default: //tell user if input is incorrect and ask again
            alert("Way to break the machine! Try Again! Need a number between 1 and 10.");
            break;
            
    }
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
getShape(valid);