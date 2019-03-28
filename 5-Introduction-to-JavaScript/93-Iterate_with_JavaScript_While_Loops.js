/*
We can run the same code multiple times by using loops in JavaScript.  There are different kinds of loops, the first one
we will demonstrate is called a "while" loop.  It has this name because it runs code while a specified condition is true.
Once that condition is no longer true, the loop is exited and the code block stops running.

*/

// Setup
var myArray = [];

// Only change code below this line.
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}