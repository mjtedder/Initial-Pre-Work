/*
Bracket notation is useful when we are trying to access an object property with spaces in its name.  Dot notation
doesn't work in this instance.  We can also use bracket notation if the property doesn't have a space in the name.

Remember to use double or single quotes when accessing the property with spaces in its name.
*/

// Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];