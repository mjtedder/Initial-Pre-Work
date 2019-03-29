/*
There are two kinds of export statements in ES6, the first was in the previous lesson, called named export.  This is
what allows us to make multiple functions and variables available for use in other files.

The other export statement is known as export default.  We use this when only one value is being exported from a file.
*/

"use strict";
export default function subtract(x, y) {
    return x - y;
}