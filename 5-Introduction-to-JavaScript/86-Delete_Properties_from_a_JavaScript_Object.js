// Using the delete keyword, we can delete properties from an object.  We use dot or bracket notation to do this.

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line.
delete myDog.tails;
delete myDog["tails"];