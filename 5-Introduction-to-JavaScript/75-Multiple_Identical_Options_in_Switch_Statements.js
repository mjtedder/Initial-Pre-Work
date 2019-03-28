/*
If we remove the break statement from a switch statment's case, the statements will be run until a
break is encountered.  This is useful when we have multiple inputs with the same output.
*/

function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    // Only change code above this line
    return answer;
}

// Change this value to test
sequentialSizes(1);