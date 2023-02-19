class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest() {
    console.log(`${this.firstName} taking a test!`);
  }
}

class Teacher extends Person {
  override get fullName(): string {
    return `Professor ${this.firstName} ${this.lastName}`;
  }
}

class Principal extends Person {
  override get fullName(): string {
    return `Principal ${this.firstName} ${this.lastName}`;
  }
}

function printNames(people: Person[]) {
  for (const person of people) {
    console.log(person.fullName);
    /*
Mike UIKing
Professor Mosh Hamedani
Principal Bada VCI
*/
  }
}

// Ds is Polymorphism in action because we have our Person object taking different form : Student and Teacher...
// 2moro we can add another 'Principal' and we will print out different results
printNames([
  new Student(1, "Mike", "UIKing"),
  new Teacher("Mosh", "Hamedani"),
  new Principal("Bada", "VCI"),
]);
