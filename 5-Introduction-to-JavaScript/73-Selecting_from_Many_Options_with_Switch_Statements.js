// Switch satements are great when there are many options to choose from.  I prefer them over if/else statements because
// the code is a bit easier to navigate.  Switch statements can replace multiple if checks like in the previous exercise.

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    // Only change code above this line
    return answer;
}

// Change this value to test
caseInSwitch(1);