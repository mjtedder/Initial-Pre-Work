/*

If we declare a variable and don't initialize it with a value, that is fine.  We can run into trouble if we try to use
this variable in an operation.  For example if we declare var a, and then try to use it with a mathematical operator:

a = a + 7

This will return NaN (Not a Number) because we never assigned the variable a numerical value.  The same will happen if we
try to concatenate a string with a variable that has no value.  It will return undefined.

*/

// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";