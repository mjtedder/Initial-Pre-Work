// We can also chain multiple conditional operators together, just like we can with if/else if/else statements.

function checkSign(num) {
    return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);