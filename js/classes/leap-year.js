let year = 2016;
let month = 2; // 2 means February

let days;

if (month === 2) {
    // Leap year check
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        days = 29;
    } else {
        days = 28;
    }
}
else if ([4, 6, 9, 11].includes(month)) {
    days = 30;
}
else {
    days = 31;
}

console.log("Days:", days);