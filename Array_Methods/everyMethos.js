/* The every() method is in a way similar to the some() method, but it tests wether all the elements in the array pass the test implemented by callback function */

const a = [10, 6, 7, 9, 8].every(item => item > 5);

console.log(a);