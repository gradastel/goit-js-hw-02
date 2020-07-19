"use strict";

const formatString = function (string) {
  let stringSplit = string.split("");
  console.log(stringSplit);
  let newString = "";
  if (stringSplit.length > 40) {
    newString = stringSplit.splice(40);
    newString = stringSplit.push("...");
    newString = stringSplit.join("");
  } else if (stringSplit.length < 40) {
    newString = string;
  }
  return newString;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
