/*
    Title: Multiplying numbers as strings

    Kata's Sensei: osofem

    Kata URL: https://www.codewars.com/kata/55911ef14065454c75000062

    Description: This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

    The arguments are passed as strings.
    The numbers may be way very large
    Answer should be returned as a string
    The returned "number" should not start with zeros e.g. 0123 is invalid
    Note: 100 randomly generated tests!

*/

// JavaScript
// Solution
function multiply(a, b)
{
  let aN = BigInt(a,10);
  let bN = BigInt(b,10);
  return (aN * bN).toString();
}