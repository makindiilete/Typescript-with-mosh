// With Union types, we can give our variables more than one type using the vertical bar '|'
var weightUnionTypes = function (weight) {
    if (typeof weight === "number")
        return weight + 20;
    else
        return Number(weight) * 23;
};
