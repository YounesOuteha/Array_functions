/* We might need to filter fasty values like [0, undefined, null, flase]. This is a simple trick to do so */

var mixedArray = [12, 'web developmenz', '', null, undefined, 0, true, false];
var whatIsTrue = mixedArray.filter(Boolean);

console.log(whatIsTrue);