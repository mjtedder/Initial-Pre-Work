/*

We can also loop through a multi-dimensional array (arrays with sub-arrays) by nesting a for loop within a for loop.
The inner loop we check .length of arr[i] because arr[i] is the first array.

*/

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

// Modify values below to test your code
multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);