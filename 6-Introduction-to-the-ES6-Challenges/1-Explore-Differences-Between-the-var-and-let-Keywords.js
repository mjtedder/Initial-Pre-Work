/*
ECMAScript6 (ES6) is the next version of JavaScript.  We will be learning the new features added to this version of JavaScript
in these challenges.

This challenge introduces the difference between var and let.  The var keyword declares a variable, but it can be overwritten
if we declare and assign a value to the same variable.  ES6 introduced the let keyword to avoid this issue.  If you use let, the
twice on the same variable assignment, an error would occur.
*/

let catName;
let quote;

function catTalk() {
    "use strict";
    catName = "Oliver";
    quote = catName + " says Meow!";
}
catTalk();