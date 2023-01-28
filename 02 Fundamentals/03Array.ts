let numbersJs = [1, 2, "3"]; // valid in JS

let numbersTs: number[] = [1, 2, 3]; // valid TS i.e. an array of numbers

let mixedArrayValues: (number | string)[] = [1, 2, "3"]; // an array containing numbers and strings.

let emptyArray = []; // TS will take ds as 'any[]' which is not recommend

let emptyArrayTs: number[] = []; // when U want to define an empty array or a variable with no value, make sure U define its type.

numbersTs.forEach((value) => value.toFixed(2));
console.log(numbersTs);
