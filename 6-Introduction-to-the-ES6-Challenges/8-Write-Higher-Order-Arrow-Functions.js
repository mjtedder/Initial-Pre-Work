/*
We can use arrow functions when writing higher order functions (map, reduce, filter) which take other functions as
arguments.  Arrow functions used with higher order functions make the code more concise and easier to read.

- map() is a function used when you have an array of stuff and you want to do something for every item in the array

In this example, we checked if the numbers in the realNumberArray are integers (decimals don't count) and then we square
those integers and push them into the squaredIntegers array.
*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = [];
  arr.map( num => {
    if(Number.isInteger(num)){
       squaredIntegers.push(num * num);
    }
  })
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);