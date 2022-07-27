// 1
const emptyArr = [];

// 2
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3
const length = a.length;

// 4
const first = a[0];
const middle = a[Math.floor(length / 2)];
const last = a[length - 1];

// 5
const mixedDataTypes = [1, "string", true, null, undefined, {}, [], () => { }];
const length1 = mixedDataTypes.length;

// 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle and Amazon'];

// 7
console.log('itCompanies', itCompanies);

// 8
console.log('Number of companies: ', itCompanies.length);

// 9
console.log('first company: ', itCompanies[0]);
console.log('middle company: ', itCompanies[Math.floor(itCompanies.length / 2)]);
console.log('last company: ', itCompanies[itCompanies.length - 1]);

// 10
itCompanies.map(company => console.log(company));

// 11
itCompanies.map(company => console.log(company.toUpperCase()));

// 12
console.log(itCompanies.join(', ') + ' are big IT companies');

// 13
const checkCompany = (company) => {
  return itCompanies.includes(company) ? company : 'Not found';
}

// 14
const res = [];
itCompanies.forEach(company => company.length - company.replaceAll('o', '').length > 1 && res.push(company));
console.log(res);

// 15
console.log(itCompanies.sort());

// 16
console.log(itCompanies.reverse())

// 17
const firstThree = itCompanies.slice(0, 3);
console.log(firstThree);

// 18
const lastThree = itCompanies.slice(-3);
console.log(lastThree);

// 19
const theMiddle = itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1);
console.log(theMiddle);

// 20
itCompanies.shift();
console.log(itCompanies);

// 21
itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log(itCompanies);

// 22
itCompanies.pop();
console.log(itCompanies);

// 23
itCompanies.length = 0;
console.log(itCompanies);

