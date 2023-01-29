// related variables declaration in JS
const small = 1;
const medium = 2;
const large = 3;


// TS using enum :- if U dont gv them values, ts will assign numbers to them incrementally starting from zero
enum Sizes {
  small,
  medium,
  large
}

// if u gv d first enum a value other than type number, U must set values for the remaining members but if U set d type of d first as a number, TS increments d rest by default unless U explicitly define their values
enum ExplicitSizes {
  small = 's',
  medium = 'm',
  large = 'l'
}
let mySize = Sizes.small
console.log(mySize);
