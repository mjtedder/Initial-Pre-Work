/*
We can set default values for parameters in ES6.  This prevents a function from returning undefined when the argument
isn't specified.  In this example, if the value argument isn't passed in, the default value is 1, so the function increments
the number parameter by 1.
*/

const increment = (function () {
    "use strict";
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6