/*

The difference between strict equality operator (===) and the equality operator (==) is essentially type conversion.

With the eqaulity operator, we can compare the values of different data types because JavaScript will convert them to the
same data type.  For example:

3 == "3" returns true because JavaScript will turn the string into a number before evaluating the values.

3 === "3" will return false because the strict equality operator does not use type conversion before evaluating the values.

*/

// Setup
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
// Change this value to test
compareEquality(10, "10");