export class Account {
  // Class properties
  id: number;
  owner: string;
  balance: number;

  // We need to create a constructor to initialise our properties
  constructor(id: number, owner: string, balance: number) {
    // all d class properties r on the left with 'this.' and they receive the value passed as arguments to the Account constructor.
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  //METHODS
  deposit = (amount: number): void => {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    } else {
      this.balance += amount;
    }
  };
}
