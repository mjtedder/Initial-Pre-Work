/*
We have an array of objects representing different people in our contacts list.  We then wrote a function called
profile lookup that takes a name and a property (prop) argument.  The function should:

1) Check if the name is an actual object's firstName and the given property (prop) is a property of that contact.
    - I used a for loop to iterate through our contacts array of objects, then I used an if statement to check if
     the name argument exists in the contacts array of firstName properties.
    - If it does, I then used a nested if statement to ensure the contacts array of objects hasOwnProperty of the
     prop argument passed in.
2) If both of these conditions are true, we return the value of that contact's property.
3) If neither are true, we use an else statement to return "No such contact".
*/

//Setup
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


// The function should check:
function lookUpProfile(name, prop) {
    // If name is an actual contact's firstName and the given property (prop) is a property of that contact.
    for (var i = 0; i < contacts.length; i++) {
        if (name === contacts[i].firstName) {
            // console.log('name exists!')
            if (contacts[i].hasOwnProperty(prop)) {
                // If both are true, then return the "value" of that property.
                return contacts[i][prop];
                // If prop does not correspond to any valid properties of a contact found to match name then
            } else {
                // return "No such property"
                return "No such property";
            }
        }
    }
    // If name does not correspond to any contacts then return "No such contact"
    return 'No such contact';
}

// Change these values to test your function
lookUpProfile("Akira", "likes");