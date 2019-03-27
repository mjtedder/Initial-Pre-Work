/*

In this lesson we created a madlib style function which takes in various strings and inserts them
into a sentence we created in a variable called result.  This lesson gauged our ability to concatenate strings
properly enough for them to print as a well-spaced sentence.  It involed concatenating strings with empty spaces in
order to print the sentence correctly in the console.

*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "The " + myAdjective + " " + " " + myNoun + " " + myVerb + " to the pond " + myAdverb;

    // Your code above this line
    return result;
  }

  // Change the words here to test your function
  wordBlanks("dog", "big", "ran", "quickly");