/*
 * Classes : - For defining an objects
 * Interfaces : - For defining shape of an object
 * */

abstract class Calendar {
  // a common properties among all calendar is the name : Google Calendar, Outlook Calendar etc
  constructor(public name: string) {}

  // d way we add and remove events on a calendar depends on the type of calendar we are working with so it abstract
  abstract addEvent(): void;
  abstract removeEvent(): void;
}

//Since our Calendar class does not contain any logic, we can use an interface to make it cleaner
interface ICalendar {
  name: string;
  addEvent: () => void;
  removeEvent: () => void;
}

interface ICloudCalendar extends ICalendar {
  sync: () => void;
}

//Now we want to define a google calendar dt makes use of the ICalendar interface
class GoogleCalendar implements ICalendar {
  constructor(public name: string) {}
  addEvent(): void {}
  removeEvent(): void {}
}
