/*

We can use the logical and operator (&&) to chain multiple comparison operators together.  The logical and operator
only returns true if the operands on the left AND right are true.

*/

function testLogicalAnd(val) {
    // Only change code below this line
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    // Only change code above this line
    return "No";
}

// Change this value to test
testLogicalAnd(10);