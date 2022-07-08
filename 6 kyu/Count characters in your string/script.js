/*
    Title: Count characters in your string

    Kata's Sensei: riston

    Kata URL: https://www.codewars.com/kata/52efefcbcdf57161d4000091

    Description: The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

    What if the string is empty? Then the result should be empty object literal, {}.

*/

// JavaScript
// Solution
function count (string) {  
    let res = {};
    for (let c of string) {
        if (res[c]) {
        res[c] += 1;
      } else {
        res[c] = 1;
      }
    }
    return res;
}