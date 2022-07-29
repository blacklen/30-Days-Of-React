// 1
const solveQuadraticEquation = (a, b, c) => {
  const d = b * b - 4 * a * c;
  if (d < 0) {
    return 'No solution';
  } else if (d === 0) {
    return -b / (2 * a);
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  }
}

console.log(solveQuadraticEquation(1, 0, -4));

// 2
const printArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// 3
const showDateTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

console.log(showDateTime());

// 4
const swapValue = (a, b) => {
  const temp = a;
  a = b;
  b = temp;
  console.log(a, b);
}

swapValue(1, 2);

// 5
const reverseArray = (array) => {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));


// 6
const capitalizeArray = (array) => {
  const capitalizedArray = [];
  for (let i = 0; i < array.length; i++) {
    capitalizedArray.push(array[i].toUpperCase());
  }
  return capitalizedArray;
}

// 7
const arr = [];
const addItem = (item) => [...arr, item];

// 8
const removeItem = (index) => arr.splice(index, 1);

// 9
const evensAndOdds = (n) => {
  const odds = n % 2 ? Math.floor(n / 2) + 1 : n / 2;
  const evens = n + 1 - odds;
  console.log('Odds: ', odds);
  console.log('Evens: ', evens);
}

evensAndOdds(101);

// 13
const sum = (...numbers) => numbers.reduce((a, b) => a + b);

console.log(sum(1, 2, 3, 4));

// 1
const userIdGeneratorWithSevenCharacters = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let userId = '';
  for (let i = 0; i < 7; i++) {
    userId += characters[Math.floor(Math.random() * characters.length)];
  }
  return userId;
}

console.log(userIdGeneratorWithSevenCharacters());
