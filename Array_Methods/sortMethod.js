/* The sort() function is very comman and simply allows us to sort the element of an array in place and returning the sorting array. The default sort order is ascending. The complexity and performance of this method cannot be guaranteed as it dependa on the implementation */

const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b)=> a -b);

console.log(numbers);