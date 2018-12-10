'use strict';

// Counting Sheep

let countSheep = function(numberOfSheep) {
  if (numberOfSheep <= 0) {
    return '';
  }

  return (
    `${numberOfSheep} - Another sheep jump over the fence\n` +
    countSheep(numberOfSheep - 1)
  );
};

console.log(countSheep(3));
