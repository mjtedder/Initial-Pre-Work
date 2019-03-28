/*

We can use the equality operator to compare two values.  This uses two == instead of one = which is the assignment
operator used to declare variables.  As long as the data type is an integer or 12 this function will return true or
"Equal".

*/

// Setup
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testEqual(10);