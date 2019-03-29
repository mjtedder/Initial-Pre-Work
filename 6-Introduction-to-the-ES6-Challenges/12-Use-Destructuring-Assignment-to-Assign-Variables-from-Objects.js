/*
We can use the destructuring assignment in ES6 to easily assign values taken directly from an object to variables.

In the example below, we took the value from the AVG_TEMPERATURES object property tomorrow and assigned it to key
tempOfTomorrow, then saved it to a variable called avgTemperatures.
*/

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const {
        tomorrow: tempOfTomorrow
    } = avgTemperatures; // change this line
    // change code above this line
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79