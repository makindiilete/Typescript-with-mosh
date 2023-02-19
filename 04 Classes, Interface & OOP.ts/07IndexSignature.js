// With Index signature, we can add properties to an object dynamically in TS just like JS
var SeatAssignment = /** @class */ (function () {
    function SeatAssignment() {
    }
    return SeatAssignment;
}());
var seats = new SeatAssignment();
seats.A1 = "Mosh";
seats["A2"] = "Michael";
console.log(seats);
