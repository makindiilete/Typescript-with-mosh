// This is a new type in TS.. It is used for A fixed length array where each element has a defined type

let user: [number, string] = [1, "Michael"]; // An array of only 2 elements (fixed), where the first element must be a number and the 2nd/last element must ne a string..

user.push(1); // ds is supposed to throw error but its working even tho we are not supposed to be able to push a 3rd element to this turple.. This is an issue with Ts currently..

// NOTE : - Limit your Turples to only two elements because with more elements, your code might be hard to understand.
