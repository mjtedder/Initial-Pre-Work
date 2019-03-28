/*

It is important to be aware of order in if, else if statements because functions are executed from top to bottom in
JavaScript.

If we had these statements reversed, this function would not be accurate.

*/


function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }

  // Change this value to test
  orderMyLogic(7);