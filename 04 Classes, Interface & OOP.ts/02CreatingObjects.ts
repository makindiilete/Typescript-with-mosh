// Creating objects simply means creating an instance of a class... We will be creating an account object

import { Account } from "./01CreatingClasses";

let account = new Account(1, "Michael", 100);
let deposit = account.deposit(1000);
console.log({
  balance: account.balance,
  owner: account.owner,
  id: account.id,
}); // { balance: 1100, owner: 'Michael', id: 1 }

console.log({ account });
/*
{
  account: Account {
    deposit: [Function (anonymous)],
    id: 1,
    owner: 'Michael',
    balance: 1100
  }
}

*/

console.log(typeof account); // returns 'Object'

console.log(account instanceof Account); // returns 'true'
