/*
Another keyword we use in ES6 to declare variables is const.  Const is short for CONSTANT, meaning the variable declared
is read-only and cannot be assigned.  If we try to reassign a constant variable, an error will be thrown.

It is best practice to name const variables in ALL_CAPS, and separate two-word variables with an underscore.
*/

function printManyTimes(str) {
    "use strict";
    // change code below this line
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }
    // change code above this line
}
printManyTimes("freeCodeCamp");