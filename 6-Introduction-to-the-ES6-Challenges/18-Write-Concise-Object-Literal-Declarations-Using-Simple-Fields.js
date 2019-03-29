// We can use object literal declarations to eliminate the need to specify key value pairs when returning objects.


const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return {
        name,
        age,
        gender
    };
    // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object