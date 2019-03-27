/*

Local scope refers to variables definied within a function as well as the parameters of the function.
These variables have local scope, which means that they cannot be accessed outside of the function, and are
only visible within that function.

If we create a function which has a variable called myVar = "Hello World", then we tell the function to console.log the
value of myVar, it will print when the function is called.  If we try to console.log(myVar) outside of the function, myVar
will return undefined, because it is visible within the local scope of that function.

*/

function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    var myVar = "Hello World";
    console.log(myVar);
  }
  myLocalScope();

  // Run and check the console
  // myVar is not defined outside of myLocalScope


  // Now remove the console log line to pass the test