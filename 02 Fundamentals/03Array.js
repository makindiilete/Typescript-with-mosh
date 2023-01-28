var numbersJs = [1, 2, "3"]; // valid in JS
var numbersTs = [1, 2, 3]; // valid TS i.e. an array of numbers
var mixedArrayValues = [1, 2, "3"]; // an array containing numbers and strings.
var emptyArray = []; // TS will take ds as 'any[]' which is not recommend
var emptyArrayTs = []; // when U want to define an empty array or a variable with no value, make sure U define its type.
numbersTs.forEach(function (value) { return value.toFixed(2); });
console.log(numbersTs);
