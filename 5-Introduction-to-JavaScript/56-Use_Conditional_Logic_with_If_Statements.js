/*

We use conditional statements to run code only if certain conditions are true.  The keyword for a conditional
statement is "if".  This will tell JavaScript:

if (condition is true) {
    run this code
}

*/

// Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

    // Only change code below this line.
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";


    // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);