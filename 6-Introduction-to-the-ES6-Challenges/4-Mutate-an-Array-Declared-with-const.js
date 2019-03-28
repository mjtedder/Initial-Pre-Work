/*
Although const is a read-only variable declaration, we can still mutate arrays that are declared with const.
We just can't reassign the variable identifier (s).  To mutate the array, use bracket notation to access what you'd
like to change and enter the new value.
*/

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
   s[0] = 2;
   s[1] = 5;
   s[2] = 7;
  // change code above this line
}
editInPlace();