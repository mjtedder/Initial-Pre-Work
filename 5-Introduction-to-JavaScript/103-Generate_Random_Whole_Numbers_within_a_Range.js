/*
We can specify a range of numbers we want the random number to generate by specifying a minimum and maximum number
variable.  The function below generates a random number based on min and max numbers we pass into the function.  The random
number will be greater than or equal to min and less than or equal to max.
*/

// Example
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
ourRandomRange(1, 9);

// Only change code below this line.
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// Change these values to test your function
var myRandom = randomRange(5, 15);