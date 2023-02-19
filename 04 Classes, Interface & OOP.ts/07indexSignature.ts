// With Index signature, we can add properties to an object dynamically in TS just like JS
class SeatAssignment {
  // A1,      A2...... (seat number)
  // Mosh,    Michael...... (seat value)
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats["A2"] = "Michael";
console.log(seats); //SeatAssignment { A1: 'Mosh', A2: 'Michael' }
