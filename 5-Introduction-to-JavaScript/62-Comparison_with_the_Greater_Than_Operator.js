/*

Another comparison operator is the greater than operator (>).  This will compare whether the number on the left is greater
than the number on the right.  This operator will convert data types of values before comparing.

*/

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

// Change this value to test
testGreaterThan(10);