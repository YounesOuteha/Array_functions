/* Every now and then we need to fill some away wuth any data. Here we are making use of the fill method from the Array API. Notice the count 10, it denotes the number of times to fill content specified inside the fill() function */

var myArray =  new Array(10).fill('Hello');

console.log(myArray);