/*
Another type of loop in JavaScript is a do..while loop.  It is called this because it will always execute the code
one time, and then it runs while a specified condition is true.

The example below will only push the number 10 into myArray, because it doesn't check the condition in the while statement
until the code inside the do statement is run one time.  Once it notices that i is now 11, it exits the loop because
we specified the condition to only run while i < 11.

*/

// Setup
var myArray = [];
var i = 10;

// Only change code below this line.
do {
    myArray.push(i);
    i++;
} while (i < 11);