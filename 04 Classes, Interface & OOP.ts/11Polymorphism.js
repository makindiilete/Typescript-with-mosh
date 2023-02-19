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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
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
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Teacher.prototype, "fullName", {
        get: function () {
            return "Professor " + this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}(Person));
var Principal = /** @class */ (function (_super) {
    __extends(Principal, _super);
    function Principal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Principal.prototype, "fullName", {
        get: function () {
            return "Principal " + this.firstName + " " + this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Principal;
}(Person));
function printNames(people) {
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        console.log(person.fullName);
    }
}
// Ds is Polymorphism in action because we have our Person object taking different form : Student and Teacher...
// 2moro we can add another 'Principal'
printNames([
    new Student(1, "Mike", "UIKing"),
    new Teacher("Mosh", "Hamedani"),
    new Principal("Bada", "VCI"),
]);
