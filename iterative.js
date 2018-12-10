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

function binaryIterative(number){
  let binary = '';
  while(number > 0){
    binary = Math.floor(number % 2) + binary;
    number = Math.floor(number / 2);
  }
  return binary;
}

console.log(binaryIterative(25));

function factorialIterative(number){
  let factorial = 1;
  for(let i = number; i > 0; i--){
    factorial *= i;
  }
  return factorial;
}

console.log(factorialIterative(5));
/*
function fibIterative(number){
  if(number === 0){
    return 0;
  }
  let sums = [0, 1];
  for(let i = 1; i < number; i+=1){
    sums.push(sums[i-1] + sums[i]);
  }
  return sums[sums.length - 1];
}
*/

function fibIterative(number){
  if(number <= 1){
    return number;
  }
  let sums = [1, 1];
  let j = 0;
  for(let i = 2; i < number; i++){
    j+=1;
    sums[j%2] = sums[0] + sums[1];
  }
  return sums[j%2];
}
console.log(fibIterative(2));

function rotateWord(word) {
  const rotations = [];
  let rotatedWord = word;
  for (let i = 0; i < word.length; i++) {
    rotatedWord = rotatedWord.slice(1) + rotatedWord[0];
    rotations.push(rotatedWord);
  }
  return rotations;
}


function anagrams(word){
  let anagrams = rotateWord(word.slice(0,2));
  for(let i = 2; i < word.length; i++){
    const nextChar = word[i];
    let temp = [];
    for(let j = 0; j < anagrams.length; j++){
      temp = temp.concat(rotateWord(anagrams[j] + nextChar));
    }
    anagrams = temp;
  }
  return anagrams;
} 
console.log(anagrams('e'));

/*
  east
  esta
  etas
east
  aste
  ates
  aest
aste
  stea
  seat
  sate
stea
  teas
  tase
  tsea
teas

*/