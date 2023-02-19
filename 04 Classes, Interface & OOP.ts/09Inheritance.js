var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.walk = function () {
        console.log("Walking");
    };
    return Person;
}());
// We have a student class.. As a student, U sud av a firstName, lastName and U sud b able to walk
// So instead of repeating all ds properties and methods in d student class, we make make the Student class 'extends'
// d Person class so it automatically inherits all its properties and methods.
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // inside the child class, we need to have a constructor with the 'super()' method.
    // d super calls the constructor of the base class and pass all the arguments the base class expects
    function Student(studentId, firstName, lastName) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.takeTest = function () {
        console.log(this.firstName + " taking a test!");
    };
    return Student;
}(Person));
var student = new Student(1, "Michael", "Akindiilete");
// we now av access to all members of the parent and the child class...
student.walk();
student.takeTest();
