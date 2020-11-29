/* This is a crucial use case. Imagine a use case where you need to find out the duplicated values from two arrays, or also called as intersection. We are first creating a unique array by combining the ...spread operator and Set function and filter it the other array has those values */

var setA = [5,10,4,7,1,3];
var setB = [3,11,1,10,2,6];

var duplicatedValues = [...new Set(setA)].filter((x)=> setB.includes(x));

console.log(duplicatedValues);