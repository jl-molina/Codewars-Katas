/*
    Title: Nesting Structure Comparison

    Kata's Sensei: nklein

    Kata URL: https://www.codewars.com/kata/520446778469526ec0000001

    Description: Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

    For example:

    // should return true
    [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
    [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

    // should return false 
    [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
    [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

    // should return true
    [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

    // should return false
    [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
    For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.

*/

// JavaScript
// Solution
Array.prototype.sameStructureAs = function (other) {
  let thisLength = this.length;
  let otherLength = other.length;
  let result;
  console.log('this',thisLength);
  console.log('other',otherLength);
  if (thisLength !== otherLength) {
    result = false;
    return result;
  };
  this.forEach((element, index) => {
    if (element.length === 0 && other[index].length === 0) {
      result = true;
    }
    else if (Array.isArray(element) && Array.isArray(other[index])) {
      element.forEach(() => {
        result = element.sameStructureAs(other[index]);
      });
    } else if (!Array.isArray(element) && !Array.isArray(other[index])) {
      result = true;
    } else result = false;
  });
  return result;
};