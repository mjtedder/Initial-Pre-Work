/*
In order to prevent our JavaScript objects assigned with const from mutation, we can use a function called
object.freeze which prevents someone from adding, updating, or deleting data in an object.  An attempt will result
in a rejection without an error.
*/

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // change code below this line
    Object.freeze(MATH_CONSTANTS);
    // change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();