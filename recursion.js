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


// reverseString

// Input: a string
// Output: same string in reverse order
//Input to recursive call: string - char[1...n]
//Output to recursive call: char[1...n] reversed

function reverseString(string){
  if(string === ''){
    return '';
  }
  return reverseString(string.slice(1)) + string[0];
}

console.log(reverseString('a quick brown fox jumped over the lazy frog'));

// triangularNumber

// Input: positive Integer
// Ouput: An output of the number of dots in the triangle
//Input to recursive call: (n-1)
//Output to recursive call: triangular number for that row

function triangularNumber(n){
  if(n <= 1){
    return 1;
  }
  return n + triangularNumber(n-1);
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].map(triangularNumber));