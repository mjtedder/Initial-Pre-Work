/*
With ES6, we can import a single function from a file instead of using require() to import the entire file containing
the function which was the only way to import functions in ES5.  This saves time and memory.
*/

"use strict";
capitalizeString("hello!");
import { capitalizeString } from "string_functions"