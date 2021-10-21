/**
 * I did this on my own
 * Jimmy Sarath
 */

function getShape(num) {
if (numberofsides == 1)
    alert ("Bruv polygon with 1 side is called a henagon!");
if (numberofsides == 2)
    alert ("Bruv polygon with 2 sides is called a digon!");
if (numberofsides == 3) 
    alert ("Bruv polygon with 3 sides is called a trigon!");
if (numberofsides == 4)
    alert ("Bruv polygon with 4 sides is called a tetragon!");
if (numberofsides == 5)
    alert ("Bruv polygon with 5 sides is called a pentagon!");
if (numberofsides == 6)
    alert ("Bruv polygon with 6 sides is called a hexagon!");
if (numberofsides == 7)
    alert ("Bruv polygon with 7 sides is called a heptagon!");
if (numberofsides == 8) 
    alert ("Bruv polygon with 8 sides is called a octagon!");
if (numberofsides == 9)
    alert ("Bruv polygon with 9 sides is called a enneagon!");
if (numberofsides == 10)
    alert ("Bruv polygon with 10 sides is called a decagon!");
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