/*

When we define a function, we can add variables to that function called parameters which act as placeholders for the values
that will be passed in when the function is called.  When we pass in the values to the function, these are called arguments.

Parameters are when the variables are defined with the function, arguments are the actual values that are passed into the function
when it is called.

Using parameters, it is easy to write a function that can add any two numbers passed in when the function is called.

*/

// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

function functionWithArgs(arg1, arg2) {
    console.log(arg1 + arg2);
}

functionWithArgs(2, 4);