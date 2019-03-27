/*

We can also use bracket notation and length to find the second-to-last character in a string.  Instead of using
.length -1, we change it to .length -2 for second-to-last, .length - 3 for third-to-last, and so on.

*/

// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length -2];