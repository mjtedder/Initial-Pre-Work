// We can use the class keyword in ES6 to start a constructor function which creates an object.

function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    /* Alter code above this line */
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'