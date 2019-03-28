/*
In this challenge we are given an a complex object representing a collection of records.  We have written a function
which will take an album's id, a property, and a value to modify the data in this collection.

The function must check multiple instances, which is why I wrote comments and tested each step of the function.  I used
chained if/else if statements and a combination of bracket and dot notation to access different parts of this object.  I also
used the array method push when I wanted to modify data.

In the future I would like to come back and refactor this code to use a switch statement.
*/

// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    // If prop isn't tracks and value isn't empty
    if (prop !== "tracks" && value !== "") {
        // Update or set the value for that record album's property
        collection[id][prop] = value;
        // return collection;
    }
    // If prop is "tracks" but the album doesn't have a "tracks" property
    else if (prop === "tracks" && collection[id]["tracks"] === undefined) {
        // Create an empty array before adding the new value to the album's corresponding property
        var tracks = [];
        tracks.push(value);
        collection[id][prop] = tracks;
        // return collection;
    }
    // If prop is "tracks" and value isn't empty ("")
    else if (prop === "tracks" && value !== "") {
        // Push the value onto the end of the album's existing tracks array
        collection[id]["tracks"].push(value);
        // return collection;
    }
    // If value is empty (""), delete the given prop property from the album
    else if (value === "") {
        delete collection[id][prop];
        // return collection;
    }
    return collection;
}

// Alter values below to test your code
updateRecords(2548, "tracks", "");