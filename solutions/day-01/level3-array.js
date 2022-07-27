// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const average = ages.reduce((a, b) => a + b) / ages.length

ages.sort((a, b) => a - b);
console.log('min age: ', ages[0]);
console.log('max age: ', ages[ages.length - 1]);
console.log('median age: ', ages[Math.floor(ages.length / 2)]);
console.log('average age: ', average);
console.log('range: ', ages[ages.length - 1] - ages[0]);
console.log(Math.abs(ages[ages.length - 1] - average) === Math.abs(ages[0] - average));

// 3
const countries = require('./countries');
const middle = Math.ceil(countries.length / 2);
const firstHalf = countries.splice(0, middle);
console.log(firstHalf, countries);

