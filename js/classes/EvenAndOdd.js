// Step 1: Create empty arrays
let evenNumbers = [];
let oddNumbers = [];

// Step 2: Loop from 1 to 50
for (let i = 1; i <= 50; i++) {

    if (i % 2 === 0) {
        evenNumbers.push(i);
    } else {
        oddNumbers.push(i);
    }
}

// Step 3: Print Results
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

console.log("Total Even Numbers:", evenNumbers.length);
console.log("Total Odd Numbers:", oddNumbers.length);