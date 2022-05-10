/*
    Title: Find the stray number

    Kata's Sensei: janitormeir

    Kata URL: https://www.codewars.com/kata/57f609022f4d534f05000024

    Description: You are given an odd-length array of integers, in which all of them are the same, except for one single number.

    Complete the method which accepts such an array, and returns that single different number.

    The input array will always be valid! (odd-length >= 3)

    Examples
    [1, 1, 2] ==> 2
    [17, 17, 3, 17, 17, 17, 17] ==> 3

*/

// JavaScript
// Solution
function stray(numbers) {
    let first = numbers[0];
    let second = 0;
    let count = 0;
    for (const element of numbers) {
      if (element === first) {
        count++;
      } else {
        second = element;
      }
    }
    return count > 1 ? second : first;
  }