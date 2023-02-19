// A static member of a class is are properties that can only be called from the class itself and not the instance
/*When we make any member of a class static, we will have only a single instance of them in memory.. Which means that
if we create 100 objects from d class, they will all b pointing to the same instance and incrementing or decrementing
will propagate everywhere
*/

class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }

  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(ride1.activeRides); // TS2576: Property 'activeRides' does not exist on type 'Ride'. Did you mean to access the static member 'Ride.activeRides' instead?
console.log(Ride.activeRides);
console.log(Ride.activeRides);
