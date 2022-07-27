const prompt = require('prompt');
// 1, 2
prompt.start();

prompt.get(['age'], function (_, result) {
  if (result.age >= 18) {
    console.log('You are old enough to drive!');
  } else {
    console.log(`You are left with ${18 - result.age} years to drive.`);
  }

  const myAge = 24;
  if (result.age > myAge) {
    console.log(`You are ${result.age - myAge} older than me`);
  } else if (result.age < myAge) {
    console.log(`You are ${myAge - result.age} younger than me`);
  } else {
    console.log('You are the same age as me');
  }
});

// 3
const a = 4;
const b = 3;
if (a > b)  console.log('a is greater than b');
else console.log('a is less than b');

console.log(a > b ? 'a is greater than b' : 'a is less than b');

