'use strict';

// Counting Sheep

let countSheep = function(numberOfSheep) {
  if (numberOfSheep <= 0) {
    return '';
  }

  console.log(`${numberOfSheep} - Another sheep jump over the fence`);
  return countSheep(numberOfSheep - 1);
};

countSheep(3);

// Array double

// Input: array of unknown length of numbers
// Output: array of unknown lenght of numbers with values doubled
// Input to recursive call: array.slice(1)
// Output to recurisive call: array[0] + arrayDouble(...)

let arrayDouble = function(array) {
  if (array.length === 0) {
    return [];
  }

  const doubled = [array[0] * 2];
  return doubled.concat(arrayDouble(array.slice(1)));
};

console.log(arrayDouble([2, 6, 10]));
console.log(arrayDouble([1, 2, 3]));
console.log(arrayDouble([2, 5, 6]));
