/*
We can use template literals to create multi-line strings.  We use the back-tick ` to wrap the string, and we
don't need to use \n to start a new line.  This is a great addition to ES6 and allows for cleaner, more concise code.

*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    "use strict";

    // change code below this line
    const resultDisplayArray = result.failure.map(x => `<li class="text-warning">${x}</li>`);
    // change code above this line

    return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);