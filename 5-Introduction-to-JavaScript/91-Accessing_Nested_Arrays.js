/*
We can access nested arrays by chaining together array bracket notation.  In the example below, we are accessing the second
item in the list array of the second array in the object trees.  We use put a 1 in the bracket notation because arrays use
zero-based indexing.
*/

// Setup
var myPlants = [{
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

// Only change code below this line
var secondTree = myPlants[1].list[1];