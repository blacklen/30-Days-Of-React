// 1
const fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
}

// 2
const sum = (a, b) => {
  return a + b;
}

// 3
const areaOfCircle = (radius) => {
  return Math.PI * radius * radius;
}

// 4
const convertCelsiusToFahrenheit = (celsius) => {
  return celsius * 9 / 5 + 32;
}

// 5
const checkBMI = (weight, height) => {
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 25) {
    return 'Normal';
  } else if (bmi < 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

// 6
const checkSeason = (month) => {
  if (3 <= month <= 5) {
    return 'Spring';
  } else if (6 <= month <= 8) {
    return 'Summer';
  } else if (9 <= month <= 11) {
    return 'Autumn';
  } else {
    return 'Winter';
  }
}
