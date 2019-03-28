/*
We can use JavaScript objects to store a flexible data structure.  This is called a complex object because it
allows for many different JavaScript data types.  The object below is an example of a complex data structure because
it contains booleans, strings, arrays, and numbers  This is an array of objects, similar to what you will see when we
start working with APIs (Applicaiton Programming Interface).  The data returned will be returned in
JSON (JavaScript Object Notation).
*/

var myMusic = [{
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    // Add record here
    {
        "artist": "Umphrey's McGee",
        "title": "Booth Love",
        "release_year": 2013,
        "formats": [
            "CD",
            "LP",
            "MP3"
        ]
    }
];