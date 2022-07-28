// 1
const dog = {};

// 2
console.log('dog', dog);

// 3
dog.name = 'Buddy';
dog.age = 2;
dog.color = 'black';
dog.legs = 4;
dog.bark = () => 'Woof woof';

// 4
dog.getName = () => dog.name;
dog.getAge = () => dog.age;
dog.getColor = () => dog.color;
dog.getLegs = () => dog.legs;
dog.getName = () => dog.name;
dog.getBark = () => dog.bark();

// 5
dog.setBreed = (breed) => dog.breed = breed;
dog.getDogInfo = () => `${dog.name} is a ${dog.age} year old ${dog.color} dog with ${dog.legs} legs.`;

