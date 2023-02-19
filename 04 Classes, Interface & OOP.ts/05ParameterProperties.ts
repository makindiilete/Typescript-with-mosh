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

  // if we need to get d value of balance outside this class, we can create a method that returns this and then call dt method
  getBalance = (): number => {
    return this._balance;
  };
}

let account = new Account(1, "Mike", 200);
account.id = 5; // TS2540: Cannot assign to 'id' because it is a read-only property
account._balance = 300; // TS2341: Property 'balance' is private and only accessible within class 'Account;
account.getBalance(); // ds will return d balance without using the '_balance' property directly...
