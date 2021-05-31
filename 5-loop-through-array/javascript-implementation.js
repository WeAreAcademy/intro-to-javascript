"use strict"; // turns strict mode on

// set words to ["the", "enormous", "cat", "sat", "slouching", "on", "the", "horizontal", "mat"]
let words = [
  "the",
  "enormous",
  "cat",
  "sat",
  "slouching",
  "on",
  "the",
  "horizontal",
  "mat",
];

// for each word in words
for (let word of words) {
  // if word has 3 letters or fewer
  if (word.length <= 3) {
    // print word
    console.log(word);
    // else
  } else {
    // print "*****"
    console.log("*****");
  }
}
