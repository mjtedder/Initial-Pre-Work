/*
We can use an object to lookup values rather than using a switch statement or if/else chain.  This is
useful when our input data is limited to a certain range like below.

The function below takes in a parameter (val) and returns the associated value to the key argument given in the
lookup object.
*/

// Setup
function phoneticLookup(val) {
    var result = "";
    // Only change code below this line
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    // Only change code above this line
    return result;
}

// Change this value to test
phoneticLookup("charlie");