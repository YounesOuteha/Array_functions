/* Merging arrays are a major use case in any application that we develop. We might have user array and a permission array denoting permission for the user. We might need to contribute it as a array in order to perform something on the API. Here we are making use of the spread operator ... to combine or merge arrays */

var bikes = ['TVS', 'BMW', 'Ducati'];
var cars = ['Mercedes', 'VW', 'Audi'];

var autoMobiles = [...bikes, ...cars];
console.log(autoMobiles)