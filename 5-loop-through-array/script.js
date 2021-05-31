"use strict"; // turns strict mode on

// TODO: fix me

let daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

console.log("The days of the week are:");

for (fullDayName in daysOfWeek) {
  let shortDayName = fullDayName.slice(0, 3);
  console.log(`- ${shortDayName.toUpperCase()}: ${fullDayName}`);
}
