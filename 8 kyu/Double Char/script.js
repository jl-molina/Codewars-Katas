/*
    Title: Double Char

    Kata's Sensei: Alpri Else

    Kata URL: https://www.codewars.com/kata/56b1f01c247c01db92000076

    Description: Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

    Examples (Input -> Output):
    * "String"      -> "SSttrriinngg"
    * "Hello World" -> "HHeelllloo  WWoorrlldd"
    * "1234!_ "     -> "11223344!!__  "
    Good Luck!
*/

// JavaScript
// Solution
function doubleChar(str) {
    let newArr = [];
    str.split('').forEach(element => {
      newArr += element + element;
    });
    return newArr;
  }