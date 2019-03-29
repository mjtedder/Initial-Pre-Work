/*
We can use the destructuring assignment along with the spread operator to collect the rest of the elements and place them
into a separate array.  This is similar to the Array.prototype.splice() method.

In the example below, we destructured the source array's first two elements and used the spread operator to save
the remaining elements into a variable called arr.

*/

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    "use strict";
    // change code below this line
    const [a, b, ...arr] = source;
    // change code above this line
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];