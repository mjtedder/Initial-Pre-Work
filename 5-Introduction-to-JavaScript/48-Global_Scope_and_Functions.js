/*

Scope can be a very confusing concept in JavaScript.  It refers to the visibility of variables.  For best practices,
we should always initialize a variable with the var keyword, otherwise, unintended consequences can arise.

If we don't use the var keyword when defining a variable inside of a function, it will become a global variable which means
it can be accessed anywhere.  To keep the variable within in the local scope of the function, always define it with the var
keyword.

*/

// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}