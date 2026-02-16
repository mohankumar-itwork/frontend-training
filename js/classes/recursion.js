
// Count Down using recursion
function countDown(fromNumber) {

    console.log(fromNumber);

    var nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}

countDown(5);

console.log("-----------------------------");


// Recursive sum of natural numbers
function recursiveSum(n) {

    if (n === 1) {
        return 1;   // base condition
    }

    return n + recursiveSum(n - 1);
}

var result = recursiveSum(10);

console.log("Sum of first 10 natural numbers:", result);