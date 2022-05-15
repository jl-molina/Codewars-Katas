/*
    Title: Exclamation marks series #1: Remove an exclamation mark from the end of string

    Kata's Sensei: myjinxin2015

    Kata URL: https://www.codewars.com/kata/57fae964d80daa229d000126

    Description: Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

    Examples
    remove("Hi!") === "Hi"
    remove("Hi!!!") === "Hi!!"
    remove("!Hi") === "!Hi"
    remove("!Hi!") === "!Hi"
    remove("Hi! Hi!") === "Hi! Hi"
    remove("Hi") === "Hi"
    Note
    Please don't post issue about difficulty or duplicate.
*/

// JavaScript
// Solution
function remove (string) {
    return string[string.length-1] === '!' ? string.slice(0, string.length - 1) : string;
  }