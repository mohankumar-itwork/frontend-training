"use strict";

var obj = {
    name: "Krishna"
};

console.log("Initial Object:");
console.log(obj);

Object.defineProperty(obj, "age", {
    value: 23,
    writable: true,
    configurable: true,
    enumerable: true
});

console.log("After defineProperty:");
console.log(obj);

obj.age = 30;
console.log("After modifying age:");
console.log(obj);

delete obj.age;
console.log("After deleting age:");
console.log(obj);

Object.defineProperties(obj, {
    age: {
        value: 25,
        writable: true,
        configurable: true,
        enumerable: true
    },
    course: {
        value: "FRONT END",
        writable: true,
        configurable: true,
        enumerable: true
    }
});

console.log("After defineProperties:");
console.log(obj);

obj.age = 40;
console.log("After modifying age again:");
console.log(obj);

console.log("Descriptor of name:");
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

console.log("Descriptor of age:");
console.log(Object.getOwnPropertyDescriptor(obj, "age"));

console.log("All Descriptors:");
console.log(Object.getOwnPropertyDescriptors(obj));