/*
We can use what's called a spread operator in place of separate comma-separated arguments.  In the exmample below,
we are placing the contents of arr1 into arr2.  Using the spread operator, we just use the keyword ...<arrayname>
in this case arr1 to spread the contents of arr1 into arr2.
*/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    "use strict";
    arr2 = [...arr1];
})();
console.log(arr2);