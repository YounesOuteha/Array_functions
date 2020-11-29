/* These some() tests wwhether at least one element in the array passes the test implemented by the callback function. The callback function will receive 3 arguments, the index, and the full array. Additionally, is possible to assign a value for this when excuting the callback function by using the argument thisArg */

const a = [1, 2, 3, 5, 8].some(item => item > 5);

console.log(a);