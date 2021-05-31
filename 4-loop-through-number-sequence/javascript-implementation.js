"use strict"; // turns strict mode on

// print "Here's my advent calendar:"
console.log("Here's my advent calendar:");

// for each day_of_month from 1 to 25
for (let dayOfMonth = 1; dayOfMonth <= 25; dayOfMonth++) {
  // set date to "December <day_of_month>"
  let date = `December ${dayOfMonth}`;
  // print "It's <date>, have a chocolate!"
  console.log(`It's ${date}, have a chocolate!`);
}

// read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
