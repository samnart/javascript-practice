// let obj = {
//     get PropName() {},

//     set PropName(value) {}
// };

// let user = {
//     name: "John",
//     surname: "Smith",
// };

// Object.defineProperty(user, 'fullName', {
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// });

// user.fullName = "Alice Cooper";

// console.log(user.name);
// console.log(user.surname);

// console.log(user.fullName);
// for(let key in user) console.log(key);


// Smarter getters/setters

// let user = {
//     get name() {
//         return this._name;
//     },

//     set name(value) {
//         if (value.length < 4) {
//             console.log("Name is too short, need at least 4 characters");
//             return;
//         }
//         this._name = value;
//     }
// };

// user.name = "Pet";
// console.log(user.name);

// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;

//     // age is calculated from the current date and birthday
//     Object.defineProperty(this, "age", {
//         get() {
//             let todayYear = new Date().getFullYear();
//             return todayYear - this.birthday.getFullYear();
//         }
//     });
// }

// let John = new User("Jogn", new Date(1992, 6, 1));

// console.log( John.birthday );
// console.log( John.age );

// CLASS BASIC SYNTAX

// class MyClass {
    // class methods
//     constructor() {}
//     method1() {}
//     method2() {}
//     method3() {}
// };

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         console.log(this.name);
//     }
// }

// let user = new User("John");
// user.sayHi();

// class User {
//     constructor(name) { this.name = name; }
//     sayHi() { console.log(this.name); }
// }

// console.log(typeof User);
// console.log(User === User.prototype.constructor);
// console.log(User.prototype.sayHi);
// console.log(Object.getOwnPropertyNames(User.prototype));

// function User(name) {
//     this.name = name;
// }

// User.prototype.sayHi = function() {
//     console.log(this.name);
// }

// let user = new User("John");
// // user.sayHi();
// console.log(User);

// let User = class {
//     sayHi() {
//         console.log("Hello");
//     }
// };

// Name Class Expression
// let User = class MyClass {
//     sayHi() {
//         console.log(MyClass);
//     }
// };

// new User().sayHi();
// console.log(MyClass);

// function makeClass(phrase) {
//     // declare a class and return it
//     return class {
//         sayHi() {
//             console.log(phrase);
//         }
//     };
// }

// // Create a new class
// let User = makeClass("Hello");
// new User().sayHi();

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         if (value.length < 4) {
//             console.log("Name is too short.");
//             return;
//         }
//         this._name = value;
//     }
// }

// let user = new User("John");
// console.log(user.name);

// class User {
//     ['say' + 'Hi']() {
//         console.log("Hello");
//     }
// }

// new User().sayHi();

// CLASS FIELDS ARE A RECENT ADDITION TO JS
// class User {
//     name = "John";

//     sayHi() {
//         console.log(`Hello, ${this.name}!`);
//     }
// }

// new User().sayHi();

// class User {
//     name = "John";
// }

// let user = new User();
// console.log(user.name);
// console.log(User.prototype.name);

// class User {
//     name = prompt("Name, please?", "John");
// }

// let user = new User();
// console.log(user.name);

// class Button {
//     constructor(value) {
//         this.value = value;
//     }

//     click() {
//         console.log(this.value);
//     }
// }

// let button = new Button("hello");
// console.log(button);
// console.log(button.click());
// setTimeout(button.click, 1000);

// class Button {
//     constructor(value) {
//         this.value = value;
//     }
//     click = () => {
//         console.log(this.value);
//     }
// }

// let button = new Button("hello");
// setTimeout(button.click, 1000);

    // SUMMARY 
    // BASIC CLASS SYNTAX

class MyClass {
    prop = CSSMathValue;

    constructor() {}

    method() {}

    get something(){}
    set something(value){}

    [Symbol.iterator]() {}
}