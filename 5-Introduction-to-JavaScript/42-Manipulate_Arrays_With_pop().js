/*

.pop() is an array method which removes the last item from the given array and can also store it to another variable.
For example, on line 17, the value of removedFromMyArray is ["cat", 2].  We can use the pop method to remove strings, numbers
or even nested arrays from an array variable.

*/

// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); 
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop();