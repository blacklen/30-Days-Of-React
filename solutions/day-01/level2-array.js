// 1
const countries = require('./countries');
const webTechs = require('./web_techs');

// 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.replaceAll(/[.,]/g, '').split(' ');
console.log(words);
console.log(words.length);

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat');
if (!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar');
const allergicHoney = false;
if (allergicHoney) {
  const index = shoppingCart.indexOf('Honey');
  shoppingCart.splice(index, 1);
}
const teaIndex = shoppingCart.indexOf('Tea');
shoppingCart.splice(teaIndex, 1, 'Green Tea');
console.log(shoppingCart);

// 4
const ethIndex = countries.indexOf('Ethiopia');
if (ethIndex > -1) {
  console.log(countries[ethIndex].toUpperCase());
} else {
  countries.push('Ethiopia');
}

// 5
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

