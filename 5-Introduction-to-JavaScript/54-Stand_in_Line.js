/*

In this lesson, we created a function that creates a queue.  The function takes in two parameters, an array
and a number.  It then uses the push() method to add the number to end of the array.  It also removes the first item in
the array using the shift() method.

*/

function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    var removedItem = arr.shift();
    return removedItem;  // Change this line
  }

  // Test Setup
  var testArr = [1,2,3,4,5];

  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));