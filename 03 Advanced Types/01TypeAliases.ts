// With Type Alias, we can define a custom type which we can then use as a type for our variables..

//Without type alias
let employee : {
    readonly id: number;
    name: string;
    faxNumber?: string; // ds will b optional
    retire: (date: Date) => void; // d object contains a method 'retire' which takes a date argument and returns nothing
} = {
    id: 1, name : "Michael", retire: (date: Date) => console.log(date)
}


// With type alias

type Employee = {
    readonly id: number;
    name: string;
    faxNumber?: string; // ds will b optional
    retire: (date: Date) => void; // d object contains a method 'retire' which takes a date argument and returns nothing
}

let employeeTypeAlias : Employee  = {
    id: 1, name : "Michael", retire: (date: Date) => console.log(date)
}