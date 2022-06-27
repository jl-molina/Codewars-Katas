/*
    Title: Alternate capitalization

    Kata's Sensei: KenKamau

    Kata URL: https://www.codewars.com/kata/59cfc000aeb2844d16000075

    Description: Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

    For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

    The input will be a lowercase string with no spaces.

    Good luck!

*/

// JavaScript
// Solution
function capitalize(s){
    let cap1 = s.split('').map((e, i) => i%2 === 0 ? e.toUpperCase() : e).join('');
    let cap2 = s.split('').map((e,i) => i%2 !== 0 ? e.toUpperCase() : e).join('');
    return [cap1, cap2];
};