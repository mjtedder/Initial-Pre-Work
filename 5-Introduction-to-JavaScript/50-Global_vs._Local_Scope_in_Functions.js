/*

We can have global and local variables with the same name; however, the local variable will override the value
of the global variable.

*/

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();