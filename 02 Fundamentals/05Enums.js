// related variables declaration in JS
var small = 1;
var medium = 2;
var large = 3;
// TS using enum :- if U dont gv them values, ts will assign numbers to them incrementally starting from zero
var Sizes;
(function (Sizes) {
    Sizes[Sizes["small"] = 0] = "small";
    Sizes[Sizes["medium"] = 1] = "medium";
    Sizes[Sizes["large"] = 2] = "large";
})(Sizes || (Sizes = {}));
// if u gv d first enum a value other than type number, U must set values for the remaining members but if U set d type of d first as a number, TS increments d rest by default unless U explicitly define their values
var ExplicitSizes;
(function (ExplicitSizes) {
    ExplicitSizes["small"] = "s";
    ExplicitSizes["medium"] = "m";
    ExplicitSizes["large"] = "l";
})(ExplicitSizes || (ExplicitSizes = {}));
var mySize = Sizes.small;
console.log(mySize);
