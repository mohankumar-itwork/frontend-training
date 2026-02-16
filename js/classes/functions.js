
function strchar(str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}

strchar("Krishna");


// ---------------------------------------
// Assignment
// doSomething(2,"Hello",4,true,"Krishna")
// Output:
// {
//    num: 6,
//    bool: [true],
//    str: ['H','e','l','l','o','K','r','i','s','h','n','a']
// }
// ---------------------------------------


function doSomething() {

    var numberSum = 0;
    var boolArray = [];
    var stringChars = [];

    for (var i = 0; i < arguments.length; i++) {

        if (typeof arguments[i] === "number") {
            numberSum += arguments[i];
        }

        else if (typeof arguments[i] === "boolean") {
            boolArray.push(arguments[i]);
        }

        else if (typeof arguments[i] === "string") {
            for (var j = 0; j < arguments[i].length; j++) {
                stringChars.push(arguments[i][j]);
            }
        }
    }

    console.log({
        num: numberSum,
        bool: boolArray,
        str: stringChars
    });
}


doSomething(2, "Hello", 4, true, "Krishna");