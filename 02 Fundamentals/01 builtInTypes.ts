// We can define the types of variables this way
let sales1: number = 123456789;
let totalSales1: number = 123_456_789; // 123456789 === 123_456_789... So when a number is large, in ts, we can separate them with "_" to make them more readable
let course1: string = "Typescript";
let is_published1: boolean = true;

// We can also allow ts to determine their types base on the values provided (We can hover on the variable name to get their types)
let sales2 = 123456789;
let totalSales2 = 123_456_789;
let course2 = "Typescript";
let is_published2 = true;
let level; // since this has no defined value, TS will give it type of 'any'
