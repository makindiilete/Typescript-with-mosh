type Customer = {
  birthday: Date;
};

const getCustomer = (id: number): Customer | null | undefined => {
  return id === 0 ? null : { birthday: new Date() };
};
let customer = getCustomer(0);
console.log(customer.birthday); // ds gv compile error 'customer' is possibly 'null'.ts(18047)'

//SOLUTION ONE with if statement
if (customer) {
  console.log(customer.birthday);
  
}

//SOLUTION TWO with optional property access operator
console.log(customer?.birthday)

//Getting the full year from the birthday date
console.log(customer?.birthday?.getFullYear());

//Optional element access operator : - This is useful for null check when accessing elements of an array
customer?.[0];

//Optional call operator
let log : any = (message : string) => console.log(message);
let logNull : any = null;

log('message') // ds will pass
logNull('message') // ds will crash bcos 'logNull' is not a function, its null...
