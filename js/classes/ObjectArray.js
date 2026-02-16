let arr = [10, 20, 30, 40, 50];
console.log("Initial Array:", arr);

arr.push(60);
console.log("After push(60):", arr);

arr.unshift(5);
console.log("After unshift(5):", arr);

let removedEnd = arr.pop();
console.log("Removed from end:", removedEnd);
console.log("After pop():", arr);

let removedStart = arr.shift();
console.log("Removed from beginning:", removedStart);
console.log("After shift():", arr);

arr.splice(2, 0, 25);
console.log("After splice insert:", arr);

arr.splice(3, 1);
console.log("After splice remove:", arr);

let index = arr.indexOf(40);
console.log("Index of 40:", index);

console.log("Does array include 100?", arr.includes(100));

arr.reverse();
console.log("After reverse:", arr);

arr.sort(function(a, b) {
    return a - b;
});
console.log("After sorting:", arr);

console.log("Using for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("Using forEach:");
arr.forEach(function(value) {
    console.log(value);
});

let doubled = arr.map(function(value) {
    return value * 2;
});
console.log("Doubled values:", doubled);

let greaterThan30 = arr.filter(function(value) {
    return value > 30;
});
console.log("Values greater than 30:", greaterThan30);

let totalSum = arr.reduce(function(total, value) {
    return total + value;
}, 0);
console.log("Sum of array:", totalSum);