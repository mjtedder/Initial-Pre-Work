// We can use a second argument in a parseInt function called radix, this specifies the base of a number in the string.


function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");