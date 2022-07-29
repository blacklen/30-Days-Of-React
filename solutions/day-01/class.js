// Level 1:
// 1
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  doSomething() {
    console.log('running');
  }
}

// 2
class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }

  bark() {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
  }

  meow() {
    console.log('Meow!');
  }
}

// Level 2:
// 1

class Fish extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
  }

  doSomething() {
    console.log('swimming');
  }
}

// Level 3:
// 1
class Statistics {
  constructor(data) {
    this.data = data;
  }

  count() {
    return this.data.length;
  }

  sum() {
    return this.data.reduce((a, b) => a + b);
  }

  min() {
    return Math.min(...this.data);
  }

  max() {
    return Math.max(...this.data);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    const sortedData = this.data.sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
    return sortedData.length % 2 === 0 ? (sortedData[middle - 1] + sortedData[middle]) / 2 : sortedData[middle];
  }

  mode() {
    const counts = {};
    this.data.forEach(item => {
      counts[item] = (counts[item] || 0) + 1;
    });
    const maxCount = Math.max(...Object.values(counts));
    return Object.keys(counts).filter(key => counts[key] === maxCount);
  }

  var() {
    const mean = this.mean();
    return this.data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / this.count();
  }

  std() {
    return Math.sqrt(this.var());
  }

  freqDist() {
    const counts = {};
    this.data.forEach(item => {
      counts[item] = (counts[item] || 0) + 1;
    });
    Object.keys(counts).map(key => counts[key] = counts[key] * 100 / this.count());
    return counts;
  }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

