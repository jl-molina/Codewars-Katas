/*
    Title: Find the capitals

    Kata's Sensei: ankr

    Kata URL: https://www.codewars.com/kata/539ee3b6757843632d00026b

    Description: Instructions
    Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

    Example
    Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

*/

// JavaScript
// Solution
var capitals = function (word) {
  let arr = word.split('');
  let pos = [];
  arr.forEach((e, i) => {
    if (e === e.toUpperCase()) {
      pos.push(i);
    }
  });
  return pos;
};