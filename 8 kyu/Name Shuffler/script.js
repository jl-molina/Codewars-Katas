/*
    Title: Name Shuffler

    Kata's Sensei: debri

    Kata URL: https://www.codewars.com/kata/559ac78160f0be07c200005a

    Description:Write a function that returns a string in which firstname is swapped with last name.

    Example(Input --> Output)

    "john McClane" --> "McClane john"
    */

// JavaScript
// Solution
function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}