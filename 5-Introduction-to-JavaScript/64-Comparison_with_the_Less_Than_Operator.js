// The less than comparison operator evaluates whether the number on the left is less than the value on the right.
// This operator also converts data types before comparing.

function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over";
}

// Change this value to test
testLessThan(10);