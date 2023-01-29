// when dealing with function, it is a good practise to define the type of return value our functions will be returning as well as its parameter types... If the function does not return anything then the return type should be 'void'
// This type should be defined after the parameters ()

// calculateTax() takes a parameter of type number and returns a number
/*
This function gives us a TS error saying : Function lacks ending return statement and return type does not include 'undefined'.ts(2366)
This means that, this function will not return something all the time, it will only return something if the condition specified is meant else, it will return 'undefined' that JS returns by default for functions and
'undefined' !== 'number'
*/
function calculateTax(income: number): number {
if (income < 5000) return income * 1.2
}

console.log(calculateTax(6000))

function calculateTaxWith3Args(income:number, taxYear: number): number {
  if (taxYear > 2022) {
    return income * 1.2
  } else {
    return income * 1
  }
}


/*
Expected 2 arguments, but got 1.ts(2554)
06Functions.ts(16, 47): An argument for 'taxYear' was not provided.
*/
let result = calculateTaxWith3Args(200);






function calculateTaxWithOptionalParams(income: number, taxYear?: number): number {
  if (taxYear > 2022) {
    return income * 1.2
  } else {
    return income * 1.1
  }
}

calculateTaxWithOptionalParams(2000);

//SOLUTION 1
function calculateTaxWithOptionalParamsSolution1(income: number, taxYear?: number): number {
  if ((taxYear || 2022) > 2022) {
    return income * 1.2
  } else {
    return income * 1.1
  }
}

calculateTaxWithOptionalParams(2000);

//SOLUTION 2
function calculateTaxWithOptionalParamsSolution2(income: number, taxYear = 2022): number {
  if (taxYear > 2022) {
    return income * 1.2
  } else {
    return income * 1.1
  }
}

calculateTaxWithOptionalParams(2000);
