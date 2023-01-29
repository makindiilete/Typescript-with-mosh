let employee : {
    id: number;
    name: string;
    faxNumber?: string; // ds will b optional
} = {
    id: 1, name : "Michael"
}


//make a property of an object readonly so it cannot be changed accidentally

let employeeReadOnly : {
   readonly id: number;
    name: string;
    faxNumber?: string; // ds will b optional
  retire: (date: Date) => void; // d object contains a method 'retire' which takes a date argument and returns nothing
} = {
    id: 1, name : "Michael", retire: (date: Date) => console.log(date)
}

employeeReadOnly.id = 23;
