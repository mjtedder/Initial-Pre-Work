/*

We can test whether or not an object has a certain property using the hasOwnProperty() method.  With this method
we can pass in the property name and the hasOwnProperty method will return true or false if the property is found or not.

*/

// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    if (myObj.hasOwnProperty(checkProp) === true) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}

// Test your code by modifying these values
checkObj("gift");