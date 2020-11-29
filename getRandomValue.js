/* Need a random integer value? No problem. In one line of code you can do so */

var numbers = [];

for (let i = 0; i<10; i++){
    numbers.push(i);
}

var random = numbers[Math.floor(Math.random() * numbers.length)];

console.log(random);