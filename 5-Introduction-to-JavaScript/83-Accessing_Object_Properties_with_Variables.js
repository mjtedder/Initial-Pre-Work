/*
We can also save an object's property to a variable and access it through the variable with bracket notation.  In the
example below, we saved the testObj's property of 16 to a variable called playerNumber, and then set the player variable
to equal the playerNumber variable's property value of "Montana".
*/

// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line;
var playerNumber = 16;
var player = testObj[playerNumber];