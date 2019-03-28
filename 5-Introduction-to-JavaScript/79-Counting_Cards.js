/*

Here we created a function that helps a player excel in BlackJack by counting cards and returning the current count and
if they should "Bet" or "Hold".

This function used a switch statement because it evaluates multiple options, we also nested an if/else statement to
determine whether to return "Bet" or "Hold" with the card count.  If the count is negative or equal to 0, return "Hold".
If the count is positive, return "Bet".

*/

var count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            if (count <= 0) {
                return count + " Hold";
            } else {
                return count + " Bet";
            }
            break;
        case 7:
        case 8:
        case 9:
            if (count <= 0) {
                return count + " Hold";
            } else {
                return count + " Bet";
            }
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            if (count <= 0) {
                return count + " Hold";
            } else {
                return count + " Bet";
            }
            break;
    }
    return "Change Me";
    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2);
cc(3);
cc(7);
cc('K');
cc('A');