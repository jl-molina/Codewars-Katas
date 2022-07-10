/*
    Title: String cleaning

    Kata's Sensei: mkelty

    Kata URL: https://www.codewars.com/kata/57e1e61ba396b3727c000251

    Description: Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of 
    old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random 
    places in the text.
*/

// JavaScript
// Solution
function stringClean(s){
    let numbers = ["0","1","2","3","4","5","6","7","8","9"];
    let result =  s.split('').filter(e => !numbers.includes(e));
    return result.join('');
}