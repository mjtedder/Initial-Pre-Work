/*
A lot of projects I have created involve iterating through the contents of an array in order to perform various tasks.
A for loop is a very common way to do this.  To start, we have our array, then we initialize our for loop where we would
like to start in the array (usually 0 as this is the first item in the array).  Then our condition states that as long as
initialization variable (i) is less than array.length, we will increment i to loop through all items in the array.
*/

// Example
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

// Setup
var myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}