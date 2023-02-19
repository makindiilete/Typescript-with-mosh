/*With parameter properties, we can write our class in a shorter way*/
class Account {
  nickname?: string; // we make ds property optional, so we dont need to initialize it

  // We need to create a constructor to initialise our properties
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit = (amount: number): void => {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    } else {
      // Record a transaction before updating the balance
      this._balance += amount;
    }
  };

  // A Getter version
  get balance() {
    return this._balance;
  }

  // A method version
  getBalance = (): number => {
    return this._balance;
  };

  // d seller function to set a value to the _balance
  set balance(value: number) {
    if (value <= 0) {
      throw new Error("Invalid value");
    } else {
      this._balance = value;
    }
  }
}

let account = new Account(1, "Mike", 200);
account.getBalance(); // getting d balance via method
account.balance; // getting d balance via getter
account.balance = 300; // setting d balance via its setter
