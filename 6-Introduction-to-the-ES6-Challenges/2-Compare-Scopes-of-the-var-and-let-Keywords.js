/*
The let keyword also helps with scope issues.  When a variable is declared with let, it's scope is limited to the
block, statement, or expression it is declared within.
*/

function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}