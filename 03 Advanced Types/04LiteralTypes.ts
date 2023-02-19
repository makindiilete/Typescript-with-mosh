// With Literal types, our variables can be of exact type(s)..

type Quantity = 50 | 100;
type Metric = 'cm' | 'inch';

let quantity : Quantity = 50; // ds can only be 50 or 100

let metric : Metric = "cm"; // ds can only be either 'cm' or 'inch'