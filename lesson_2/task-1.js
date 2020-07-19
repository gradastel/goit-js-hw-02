"use strict";
const names = ["Mango", "Poly", "Ajax"];
const numbers = [1, 2, 3, 4, 5];

const logItems = function (array) {
  for (let i = 0; i < names.length; i += 1) {
    console.log(`${numbers[i]} - ${names[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// for (let i = 0; i < names.length; i += 1) {
//   console.log(`${numbers[i]} - ${names[i]}`);
// }
