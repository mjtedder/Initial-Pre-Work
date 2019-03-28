/*

The strict equality operator (===) compares whether the data type AND the value are the same.  If so, it will return
the boolean true.  The function below returns false because even though the data types are the same, the values are not.

*/

// Setup
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testStrict(10);