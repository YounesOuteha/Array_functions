/* The map() method creates a new array populated with the results of the callback function for each element in the array. Similar to the methids, the callback function will receive 3 arguments, currentValue, index, and array. As is with the case of reduce(), the callback is only invoked for indexes of the array which have assigned values (including undefined) */

const numbers = [1, 2, 3, 5, 8];

const doubled = numbers.map(value => value * 2) 
console.log(doubled);
