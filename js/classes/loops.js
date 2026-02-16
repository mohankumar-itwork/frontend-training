
// Numbers 1 to 10
console.log("Numbers 1 to 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Numbers 10 to 1
console.log("\nNumbers 10 to 1");
let num = 10;
while (num >= 1) {
    console.log(num);
    num--;
}


// Even numbers 1 to 20
console.log("\nEven numbers 1 to 20");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Odd numbers 1 to 20
console.log("\nOdd numbers 1 to 20");
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// Table of 5
console.log("\nTable of 5");
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}


// Sum of numbers 1 to 100
console.log("\nSum of 1 to 100");
let totalSum = 0;

for (let i = 1; i <= 100; i++) {
    totalSum += i;
}

console.log("Sum =", totalSum);


// Factorial of 5
console.log("\nFactorial of 5");
let factorial = 1;
let n = 5;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log("5! =", factorial);


// Reverse a number
console.log("\nReverse Number");
let number = 1234;
let reverse = 0;

while (number > 0) {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
}

console.log("Reversed =", reverse);


// Fibonacci Series
console.log("\nFibonacci Series");

let fib1 = 0;
let fib2 = 1;

console.log(fib1);
console.log(fib2);

for (let i = 3; i <= 10; i++) {
    let next = fib1 + fib2;
    console.log(next);
    fib1 = fib2;
    fib2 = next;
}