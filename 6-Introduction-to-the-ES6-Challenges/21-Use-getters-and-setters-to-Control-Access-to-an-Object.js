/*
To obtain values from an object, use the getter function.  To set a value of a property within an object, use the
setter function.  The getter function is useful because we can get the value of an object's private variable without
drirectly accessing the private variable.
*/


function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Thermostat {
        constructor(Fahrenheit) {
            this.Thermostat = temp;
        }
    }
    /* Alter code above this line */
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C