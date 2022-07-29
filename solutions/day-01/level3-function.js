// 1
const prompt = require('prompt');

const userIdGeneratedByUser = () => {
  prompt.start();

  prompt.get(['numOfCharacters', 'numOfIds'], function (_, result) {
    const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const results = [...Array(+result.numOfIds).keys()].map(() => {
      let id = '';
      for (let i = 0; i < result.numOfCharacters; i++) {
        id += characters[Math.floor(Math.random() * characters.length)];
      }
      return id;
    });
    console.log(results);
  });
}

// userIdGeneratedByUser();

// 2
// generate a random color of RGB
const randomRBGColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const randomHexaColor = () => {
  const characters = '0123456789abcdef';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * characters.length)];
  }
  return color;
}

const generateColors = (code, numOfColors) => {
  const res = [...Array(+numOfColors).keys()];
  if (code === 'hexa') {
    return res.map(() => randomHexaColor());
  }

  return res.map(() => randomRBGColor());
}

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// 3
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));

// 4
const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5)); // 120

// 5
const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
}

// 6
const average = (array) => {
  return array.reduce((acc, curr) => acc + curr, 0) / array.length;
}
