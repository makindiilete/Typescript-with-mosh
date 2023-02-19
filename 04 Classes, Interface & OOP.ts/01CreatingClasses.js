"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    // We need to create a constructor to initialise our properties
    function Account(id, owner, balance) {
        var _this = this;
        //METHODS
        this.deposit = function (amount) {
            if (amount <= 0) {
                throw new Error("Invalid amount");
            }
            else {
                _this.balance += amount;
            }
        };
        // all d class properties r on the left with 'this.' and they receive the value passed as arguments to the Account constructor.
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    return Account;
}());
exports.Account = Account;
