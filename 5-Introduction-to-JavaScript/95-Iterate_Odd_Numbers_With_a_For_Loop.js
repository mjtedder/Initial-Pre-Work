/*
By changing the final expression piece of a for loop, we can iterate by odd or even numbers depending on what number
we initialize our for loop with.  If we initialize i with an even number(0) and increment by 2, the for loop only iterates
even numbers, If we initialize i with an odd number(1) and increment by 2, the for loop only iterates odd numbers.
*/

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}