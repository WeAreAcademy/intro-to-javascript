"use strict"; // turns strict mode on

// set name to "Richard"
let name = "Richard";

// print "Hi, <name>!"
console.log(`Hi, ${name}!`);

// if name has more than 8 characters
if (name.length > 8) {
  // print "I'd say that your name is quite long!"
  console.log("I'd say that your name is quite long!");
  // else if name has more than 5 characters
} else if (name.length > 5) {
  // print "I'd say that your name is an average length."
  console.log("I'd say that your name is an average length.");
  // else
} else {
  // print "I'd say that your name is quite short!"
  console.log("I'd say that your name is quite short!");
}
