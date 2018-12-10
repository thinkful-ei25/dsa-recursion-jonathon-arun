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
