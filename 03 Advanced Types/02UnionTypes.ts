// With Union types, we can give our variables more than one type using the vertical bar '|'

//Weight params can be either a string or number
const weightUnionTypes = (weight: string | number) : number => {
if (typeof weight === "number") return weight + 20
    else return  Number(weight) * 23;
}