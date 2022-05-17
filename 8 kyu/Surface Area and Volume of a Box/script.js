/*
    Title: Surface Area and Volume of a Box

    Kata's Sensei: KaraM

    Kata URL: https://www.codewars.com/kata/565f5825379664a26b00007c

    Description: Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

// JavaScript
// Solution
function getSize($width, $height, $depth) {
    $area = 2*($width*$depth) + 2*($height*$width) + 2*($depth*$height);
    $volume = $width * $height * $depth;
    return [$area, $volume];
  }