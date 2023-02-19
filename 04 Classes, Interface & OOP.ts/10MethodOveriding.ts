/*
Method Overriding is the process of tweaking the logic of a method we inherited from a base class... e.g. We inherited a 'fullName()' from
a base class which simply returns the first and last name joined together. We can overide this method so in the child class, we change d
logic to display the name of a teacher differently...
*/

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log("Walking");
  }
}

class Teacher extends Person {
  //with the 'override' keyword, we are telling the compiler dt we r overriding a method from d parent class
  override get fullName(): string {
    return `Professor ${this.firstName} ${this.lastName}`;
  }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
