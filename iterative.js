'use strict';
// Counting sheep

function countSheep(numSheep) {
  while (numSheep > 0) {
    console.log(`${numSheep} - Another sheep jump over the fence`);
    numSheep -= 1;
  }
}

countSheep(10);

function arrayDouble(arr) {
  return arr.map((item) => item * 2);
}

console.log(arrayDouble([1, 2, 3]));

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str.charAt(i);
  }

  return reversed;
}

console.log(reverseString('foo bar'));

function nthTriangular(num) {
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i;
  }
  return sum;
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].map(nthTriangular));

// String split:

function stringSplitter(sentence, separator) {
  const array = [];
  let newString = '';
  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] !== separator) {
      newString += sentence[i];
    } else {
      array.push(newString);
      newString = '';
    }
  }

  array.push(newString);

  return array;
}

console.log(stringSplitter('hello world', ' '));
console.log(stringSplitter('hellolll', 'l'));
