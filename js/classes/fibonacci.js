
// Generate Fibonacci Series using loop
function fibonacciSeries(n) {

    var fibonacci = [0, 1];

    for (var i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci.slice(0, n);
}


// Testing
var result = fibonacciSeries(10);

console.log("Fibonacci Series (10 terms):");
console.log(result);