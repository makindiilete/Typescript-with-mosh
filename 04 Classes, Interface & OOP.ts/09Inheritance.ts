class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log("Walking");
  }
}

// We have a student class.. As a student, U sud av a firstName, lastName and U sud b able to walk
// So instead of repeating all ds properties and methods in d student class, we make make the Student class 'extends'
// d Person class so it automatically inherits all its properties and methods.
class Student extends Person {
  // inside the child class, we need to have a constructor with the 'super()' method.
  // d super calls the constructor of the base class and pass all the arguments the base class expects
  // By default, d constructor of the base class is called automatically so we do not need to do ds manually unless we
  // we also want to define a constructor to implement additional properties inside the child class
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log(`${this.firstName} taking a test!`);
  }
}

let student = new Student(1, "Michael", "Akindiilete");
// we now av access to all members of the parent and the child class...
student.walk(); // Walking
student.takeTest(); // Michael taking a test
