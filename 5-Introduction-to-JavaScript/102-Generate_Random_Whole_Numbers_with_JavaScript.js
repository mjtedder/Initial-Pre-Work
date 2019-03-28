/*

In order to generate a random whole number, we use the Math.floor() JavaScript function which rounds a number down
to its nearest whole number.  To specify the range of numbers we want to randomly generate, we multiply Math.random()
by 11 if we want a number between 1 and 10.  We use 11 because Math.random never quite returns a whole number and we're
rounding down so it will never return 11, only a number between 1 through 10.

*/

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    // Only change code below this line.
    return Math.floor(Math.random() * 10);
}