/*
We use the default statement in a switch statement to execute code if no matching case statements are found.  This is
similar to the else statement at the end of an if/else chain.
*/

function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
    }
    // Only change code above this line
    return answer;
}

// Change this value to test
switchOfStuff(1);