
// Function to add two numbers
function add(a, b) {
    return a + b;
}


// Function that takes another function
function average(a, b, fn) {
    return fn(a, b) / 2;
}


var result = average(10, 20, add);
console.log("Average:", result);


// -------------------------------------
// Assignment
// cmToIn
// inToCm
// convert(fn, value)
// -------------------------------------


// Convert centimeters to inches
function cmToIn(cm) {
    return cm / 2.54;
}


// Convert inches to centimeters
function inToCm(inch) {
    return inch * 2.54;
}


// Higher order function
function convert(fn, value) {
    return fn(value);
}


// Testing
var value1 = convert(cmToIn, 10);
console.log("10 cm in inches:", value1);

var value2 = convert(inToCm, 10);
console.log("10 inches in cm:", value2);