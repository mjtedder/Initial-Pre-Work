/*
We can also use the destructuring assignment to assign variables from array.  The difference from this between
the spread operator is that it unpacks ALL of the contents of the array into a comma-separated list, so you can't pick
which elements you want to assign to a variable.
*/

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a,b] = [b,a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8