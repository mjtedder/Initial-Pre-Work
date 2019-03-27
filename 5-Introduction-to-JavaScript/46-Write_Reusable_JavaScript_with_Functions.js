/*

A function is way to divide up code into reusable parts.  It's much easier to write a function and then
call that function than to manually write what we want the code to do.  We can write it one time and store it inside
of the code block of our function.  The code block is the code written inside of the curly braces of our function.  This
is what will happen when we call the function.

It's important to remember to define our function AND call it, otherwise it is like declaring a variable but never using it.

*/

// Example
function ourReusableFunction() {
    console.log("Heyya, World");
  }

  ourReusableFunction();

  // Only change code below this line
  function reusableFunction() {
      console.log("Hi World");
  }

  reusableFunction();