/*

We can assign what is returned from a function into a variable using the assignment operator (=).
The function processArg takes in a parameter num and returns the sum of that number + 3 / 5.  In the example below,
We pass in the 7 as the argument which stores the number 2 in the global variable processed because 7 + 3 / 5 = 2.

*/

// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
var processed = processArg(7);