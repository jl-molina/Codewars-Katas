/*
    Title: Is it a palindrome?

    Kata's Sensei: wichu

    Kata URL: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

    Description:Write a function that checks if a given string (case insensitive) is a palindrome.
    */

// JavaScript
// Solution
function isPalindrome(x) {
  const arr = x.toUpperCase().split('');
  return JSON.stringify(arr) === JSON.stringify(arr.reverse());
}