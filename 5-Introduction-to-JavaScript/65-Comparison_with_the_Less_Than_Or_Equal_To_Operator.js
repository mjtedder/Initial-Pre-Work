/*

The less than or equal to comparison operator compares the values of two numbers.  If the number on the left is less than
or equal to the number on the right, true is returned.  Otherwise, the operator returns false.

*/

function testLessOrEqual(val) {
    if (val <= 12) { // Change this line
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) { // Change this line
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);