/*
When defining functions in objects in ES5, we must use the function keyword to declare it.  In ES6, we can remove
the function keyword and colon altogether, resulting in more concise code.
*/

// change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  // change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);