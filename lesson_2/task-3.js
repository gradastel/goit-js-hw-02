"use strict";

function findLongestWord(string) {
  let stringSplit = string.split(" ");
  let longest = 0;
  let word = null;
  for (let i = 0; i < stringSplit.length - 1; i++) {
    if (longest < stringSplit[i].length) {
      longest = stringSplit[i].length;
      word = stringSplit[i];
    }
  }
  return word;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
