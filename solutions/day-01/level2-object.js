const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

// 1: Assume that the user who has more than 3 skills is the one we need to find out.
Object.values(users).forEach(user => {
  if (user.skills.length > 3) {
    console.log(user.email);
  }
});

// 2
let loggedInCounter = 0;
let FiftyPointsCounter = 0;

Object.values(users).forEach(user => {
  loggedInCounter += user.isLoggedIn ? 1 : 0;
  loggedInCounter += user.points >= 50 ? 1 : 0;
});

console.log('loggedInCounter', loggedInCounter);
console.log('FiftyPointsCounter', FiftyPointsCounter);

// 3
const MERN = ['MongoDB', 'Express', 'React', 'Node'];
const MERN_users = [];

Object.values(users).forEach(user => {
  if (MERN.every(skill => user.skills.includes(skill))) {
    MERN_users.push(user);
  }
});
console.log(MERN_users);

// 4
const copyUsers = Object.assign({}, users);
copyUsers.Jane = {
  email: 'jane@jane.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
  age: 24,
  isLoggedIn: false,
  points: 50
}

// 5
const userKeys = Object.keys(users);
console.log('userKeys', userKeys);

// 6
const usersValue = Object.values(users);
console.log('usersValue', usersValue);

// 7
const userEntries = Object.entries(users);
console.log('userEntries', userEntries);
