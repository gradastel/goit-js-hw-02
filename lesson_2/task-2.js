"use strict";
// разделить введенные слова
// посчитать количество слов в строке
// умножить количество слов в массиве на цену

const calculateEngravingPrice = function (message, pricePerWord) {
  let quantity = message.split(" ");
  const result = `${message} ${quantity.length * pricePerWord}`;
  console.log(result);
};

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  10
);

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  20
);

calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40);

calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20);
