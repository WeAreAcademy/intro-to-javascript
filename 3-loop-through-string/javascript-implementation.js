"use strict"; // turns strict mode on

// set word to "coding"
let word = "coding";

// print "Here's how you spell the word:"
console.log("Here's how you spell the word:");

// for each letter in word
for (let letter of word) {
  // set capitalised_letter to uppercase of letter
  let capitalisedLetter = letter.toUpperCase(); // common to use camelCase variable names in JS
  // print capitalised_letter
  console.log(capitalisedLetter);
}

// print "Easy as that!"
console.log("Easy as that!");
