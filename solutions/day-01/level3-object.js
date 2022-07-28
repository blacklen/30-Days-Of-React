// 1
const personAccount = {
  firstName: 'John',
  lastName: 'Doe',
  incomes: [
    {
      amount: '1000',
      description: 'Salary',
    },
  ],
  expenses: [
    {
      amount: '500',
      description: 'Rent',
    },
    {
      amount: '200',
      description: 'Food',
    }
  ],
  totalIncomes: function () {
    return this.incomes.reduce((acc, curr) => acc + parseInt(curr.amount), 0);
  },
  totalExpenses: function () {
    return this.expenses.reduce((acc, curr) => acc + parseInt(curr.amount), 0);
  },
  accountInfo: function () {
    return `${this.firstName} ${this.lastName} has a balance of ${this.totalIncomes() - this.totalExpenses()}`
  },
  addIncome: function (amount, description) {
    this.incomes.push({
      amount,
      description,
    });
  },
  addExpense: function (amount, description) {
    this.expenses.push({
      amount,
      description,
    });
  },
  accountBalance: function () {
    return this.totalIncomes() - this.totalExpenses();
  }
}

console.log(personAccount.accountInfo());

// 2
const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
];

const signUp = (username, email, password) => {
  if (users.find(user => user.email === email)) {
    return 'Already existed';
  }

  const user = {
    id: parseInt(Math.random() * 10000000),
    username,
    email,
    password,
    isLoggedIn: false,
    createdAt: new Date().toLocaleString(),
  };
  users.push(user);
  return user;
}

const signIn = (username, password) => {
  if (users.find(user => user.username === username && user.password === password)) {
    return 'Sign in Success';
  }

  return 'Wrong username or password';
}

// 3
const rateProduct = (productId, userId, rate) => {
  const product = products.find(product => product._id === productId);
  if (!product) {
    return 'Product not found';
  }

  if (product.ratings.find(rating => rating.userId === userId)) {
    return 'You have already rated this product';
  }

  product.ratings.push({ userId, rate });
  return 'Rate success';
}

const averageRating = (productId) => {
  const product = products.find(product => product._id === productId);
  if (!product) {
    return 'Product not found';
  }

  const ratings = product.ratings.map(rating => rating.rate);
  return ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length;
}

// 4
const likeProduct = (productId, userId) => {
  const product = products.find(product => product._id === productId);
  if (!product) {
    return 'Product not found';
  }

  const likeIndex = product.likes.findIndex(like => like === userId);

  if (likeIndex > -1) {
    product.likes.splice(likeIndex, 1);
  }

  product.likes.push(userId);
  return 'Like success';
}
