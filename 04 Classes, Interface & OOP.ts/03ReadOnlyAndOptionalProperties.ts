/*We have some modifiers we can apply to our class properties to make us write some robust code e.g.
We can make a property 'readonly' which means that such property can only be set inside the constructor and not outside... Useful for a property like 'Id' which should not change.
*/

class Account {
  readonly id: number; //we make id readonly
  owner: string;
  balance: number;
  nickname?: string; // we make ds property optional, so we dont need to initialize it

  // We need to create a constructor to initialise our properties
  constructor(id: number, owner: string, balance: number) {
    // all d class properties r on the left with 'this.' and they receive the value passed as arguments to the Account constructor.
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit = (amount: number): void => {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    } else {
      this.balance += amount;
    }
  };
}

let account = new Account(1, "Mike", 200);
account.id = 5; // TS2540: Cannot assign to 'id' because it is a read-only property
