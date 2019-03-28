/*

Like the equality operator, we can use the inequality operator(!=) to perform the opposite of the equality operator(==).
It uses type conversion as well before evaluating the two values.

*/

// Setup
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
testNotEqual(10);