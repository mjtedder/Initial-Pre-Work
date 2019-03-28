/*
We can also count down in a for loop.  We just have to set it up opposite of how we would a normal for loop counting up.
In the example below, we used the for loop to count down from 9 to 0 and only inserted odd numbers into myArray.
*/

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}