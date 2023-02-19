"use strict";
// Creating objects simply means creating an instance of a class... We will be creating an account object
exports.__esModule = true;
var _01CreatingClasses_1 = require("./01CreatingClasses");
var account = new _01CreatingClasses_1.Account(1, "Michael", 100);
var deposit = account.deposit(1000);
console.log({
    balance: account.balance,
    owner: account.owner,
    id: account.id
}); // { balance: 1100, owner: 'Michael', id: 1 }
console.log({ account: account });
