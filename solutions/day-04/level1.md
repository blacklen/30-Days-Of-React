1. Regular func vs arrow func
  - this (regular) => dynamic (depend on how it was invoked). 4 ways:
    + myFunc() => window
    + myObj.myFunc() => myObj
    + myFunc.call(myObj) => myObj
    + myFunc.apply(myObj) => myObj
    + new myFunc() => instance of myFunc
  - this (arrow) => this lexically, doesn't define its own this(Execution context), it always equals `this` value from the outer function
    + myFunc() => window
    + myObj.myFunc() => window
    + myObj {
      myFunc () {
        myArrow = () => {}
        myRegular = function () {}
        myArrow() // myObj
        myRegular() // window
      }
    }
  - callback function
  ```js
    class Hero {
      constructor(heroName) {
        this.heroName = heroName;
      }
      logName() {
        console.log(1, this);
      }
      arrowLogName = () => {
          console.log(2, this);
      }
    }
    const batman = new Hero('Batman');
    setTimeout(batman.logName, 1000); // 1. window
    setTimeout(batman.arrowLogName, 1000); // 2. batman
    setTimeout(batman.logName.bind(batman), 1000) // 1. batman
  ```

  2. React component is a small, reusable code.
  3. Can use regular function or arrow function to create component.
  4. Functional component need to be return a JSX element.
  5. It can return only a single HTML as JSX is considered as a small component.
  6. Yes.
  7. Button Component
  ```js
  const Button = (name) => <button>{name}</button>
  ```
