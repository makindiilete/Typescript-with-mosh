/*
By default, all class properties are 'public' so we do not need to prefix them with the 'public' keyword
but we can make a property 'private' so it is not accessible outside the class...
NOTE :- p
*/
class Account {
  readonly id: number; //we make id readonly
  owner: string;
  private _balance: number;
  nickname?: string; // we make ds property optional, so we dont need to initialize it

  // We need to create a constructor to initialise our properties
  constructor(id: number, owner: string, balance: number) {
    // all d class properties r on the left with 'this.' and they receive the value passed as arguments to the Account constructor.
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit = (amount: number): void => {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    } else {
      // Record a transaction before updating the balance
      this._balance += amount;
    }
  };

  // if we need to get d value of balance outside this class, we can create a method that returns this and then call dt method
  getBalance = (): number => {
    return this._balance;
  };
}

let account = new Account(1, "Mike", 200);
account.id = 5; // TS2540: Cannot assign to 'id' because it is a read-only property
account._balance = 300; // TS2341: Property 'balance' is private and only accessible within class 'Account;
account.getBalance(); // ds will return d balance without using the '_balance' property directly...
