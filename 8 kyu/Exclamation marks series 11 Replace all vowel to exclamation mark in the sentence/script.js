/*
    Title: Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

    Kata's Sensei: myjinxin2015

    Kata URL: https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

    Description:  Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
    Examples

    replace("Hi!") === "H!!"
    replace("!Hi! Hi!") === "!H!! H!!"
    replace("aeiou") === "!!!!!"
    replace("ABCDE") === "!BCD!"

*/

// JavaScript
// Solution
function replace(s){
    return s.replace(/[aeiouAEIOU]/g, '!');
}