/*
We can access nested objects or sub-properties of objects by chaining together dot or bracket notation.  Remember to use
bracket notation when an object property contains a space in the name.
*/

// Setup
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];