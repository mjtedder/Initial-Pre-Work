// We can also use dot or bracket notation to add a new property to an existing JavaScript object.  We do this same way
// we would modify an object's property.

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.
myDog.bark = "woof";
myDog["bark"] = "woof";