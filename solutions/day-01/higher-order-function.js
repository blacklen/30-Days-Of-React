const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1
products.forEach(product => console.log(product.price));

// 2
products.forEach(p => {
  const price = +p.price || 'unknown';
  console.log(`The price of ${p.product} is ${price} euros.`)
});

// 3
let sum = 0;
products.forEach(p => p.price && (sum += +p.price));
console.log(sum);

// 4
const prices = products.map(p => p.price);

// 5
const priceFilter = products.filter(p => +p.price);
console.log(priceFilter);

// 6
const sumCompiled = products.map(p => p.price).filter(p => +p).reduce((a, b) => a + b);
console.log(sumCompiled);

// 7
const sumReduced = products.reduce((a, b) => b.price ? a + +b.price : a, 0);
console.log(sumReduced);

// 8
const firstProductWithoutPrice = products.find(p => !+p.price);
console.log('The first product without price is: ', firstProductWithoutPrice);

// 9
const indexOfFirstProductWithoutPrice = products.findIndex(p => !+p.price);
console.log('The index of the first product without price is: ', indexOfFirstProductWithoutPrice);

// 10
const haveProductWithoutPrice = products.some(p => !+p.price);
console.log('Do we have a product without price? ', haveProductWithoutPrice);

// 11
const isAllProductsHavePrice = products.every(p => +p.price);
console.log('Are all products have price? ', isAllProductsHavePrice);

// 12
// difference between forEach and map and filter and reduce
// forEach:
// - returns undefined
// map:
// - returns an array with the same length as the input array
// filter:
// - returns an array with the elements that satisfy the condition
// - the length of this array can be modified
// reduce:
// - returns a value

// 13
// difference between filter and find and findIndex
// filter:
// - returns an array with the elements that satisfy the condition
// - the length of this array can be modified
// find:
// - returns the first element that satisfies the condition
// findIndex:
// - returns the index of the first element that satisfies the condition
// - if no element satisfies the condition, returns -1

// 14
// difference between some and every
// some:
// - returns true if at least one element satisfies the condition
// every:
// - returns true if all elements satisfy the condition
