/*

Although strings are immutable, meaning the characters cannot be changed once created, arrays are mutable and the data
inside them can be changed.  We can do this by using bracket notation to access which piece of data we want to change and then
using the assignment operator to change the data.

*/

// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

// Only change code below this line.
myArray[0] = 45;