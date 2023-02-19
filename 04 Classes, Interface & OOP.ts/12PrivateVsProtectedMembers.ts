/*
The only difference between a 'Private' and a 'Protected' member is that
a "protected' member can be inherited but a 'private' member cannot be inherited

NOTE:- DO NOT use protected in your code unless you really know what you are doing because it can create issue in your code
*/

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  private walk() {
    console.log("Walking");
  }
  protected talk() {
    console.log("Talking");
  }
}

class Teacher extends Person {
  //with the 'override' keyword, we are telling the compiler dt we r overriding a method from d parent class
  override get fullName(): string {
    this.walk(); // Ds cannot be inherited bcos it is a private member
    this.talk();
    return `Professor ${this.firstName} ${this.lastName}`;
  }
}
