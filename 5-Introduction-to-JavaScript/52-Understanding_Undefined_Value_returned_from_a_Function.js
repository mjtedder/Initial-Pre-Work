/*

We do not have to include the return statement in a function.  The function will still process the inner code but the
returned value is undefined.

The function we wrote called addFive will change the value of the global variable sum, but the value of returnedValue
will return undefined because we did not include the return keyword in the function.

*/

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}

// Only change code above this line
var returnedValue = addFive();

console.log(returnedValue);
console.log(sum);