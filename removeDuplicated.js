/* This is a super efficient way to remove duplicates from array. We combine ... spread operator and the Set() API, to achieve it. */

var duplicatedArray = ['Hello', 'Hello', 'web developemtn'];
var nonDuplicatedArray = [...new Set(duplicatedArray)];

console.log(nonDuplicatedArray);