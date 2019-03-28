/*
The most common type of JavaScript loop is the "for" loop.  This loop runs for a specified number of times.
A for loop is declared with three expressions, each separated by a semicolon.  We have the initialization expression
(var i = 0;), the condition (i < 6;) and the final expression (i++;)

The condition is what tells the for loop to run as long as the condition is still true, the final expression is what is
actually run while the condition is true.  Once the condition is no longer true, the for loop exits.
*/

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; i < 6; i++) {
    myArray.push(i);
}