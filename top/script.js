// const container = document.querySelector('#container'); // selects the #container in body

// console.dir(container.firstElementChild); // selects the first child of #container => .display

// const controls = document.querySelector('.controls');  // selects the .controls div

// console.dir(controls.previousElementSibling); // selects the prior sibling => .display

// const div = document.createElement('div'); // creates a new div referenced in the variable 'div'

// div.style.color = 'blue'; // adds the indicated style rule

// div.style.cssText = 'color: blue; background: white;'; // adds several style rules

// div.setAttribute('style', 'color: blue; background: white;'); // adds several style rules

// div.style.background-color // doesn't work - attempts to subtract color from div.style.background
// div.style.backgroundColor // access the div's background-color style
// div.style[background-color] // also works
// div.style.cssText = "background-color: white"; // sets the div's background-color by assigning a css string

// // Editing Attributes
// div.setAttribute('id', 'theDiv'); // if id exists, update it to 'theDiv' else create an id with value 'theDiv'

// div.getAttribute('id');
// // returns value of specified attribute, in this case "theDiv"

// const myObject = { 
//     property: 'Value',
//     otherProperty: 77,
//     "obnoxious property": function() {
//         return 0;
//     }
// };

// // Two ways to get stuff out of an object, dot notation and bracket notation.

// // dot notation:
// myObject.property; // 'Value'

// // bracket notation:
// myObject["obnoxious property"]; // function

// const variable = 'property';

// myObject.variable; // undefined

// myObject[variable];

// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
// }

// const player = new Player('Sam', 'X');
// console.log(player.name);

// const Book = function(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

// Object.getPrototypeOf(player) === Player.prototype;
// // Object.getPrototypeOf(player) 

// Book.prototype.info = function() {
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet`;
// }

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tokien', 295, 'not read');

// console.log(theHobbit.info());


// const Book = function(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

// Book.prototype.info = function() {
//     return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet`;
// }

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');

// console.log(theHobbit.info());

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayName = function() {
//     console.log(`Hello, I'm ${this.name}!`);
// };

// const johnDoe = new Person("John Doe");
// johnDoe.sayName();



// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
// }

// Player.prototype.getMarker = function() {
//     console.log(`My marker is '${this.marker}'`);
// };
// const player1 = new Player('Alex', 'x');
// player1.getMarker();


// Object.getPrototypeOf(Player.prototype) should return the value of "Person.prototype" instead of "Object.prototype"

// Object.getPrototypeOf(Player.prototype)
// console.log(Object.getPrototypeOf(Player.prototype));

// Now make `Player` objects inherit from `Person`
// Object.setPrototypeOf(Player.prototype, Person.prototype);
// Object.getPrototypeOf(Player.prototype);

// const player1 = new Player('Steve', 'X');
// const player2 = new Player('also Steve', 'O');

// player1.sayName();
// player2.sayName();

// player1.getMarker();
// player2.getMarker();

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayName = function() {
//     console.log(`Hello, my name is ${this.name}!`);
// };

// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
// }

// // Don't do this!
// Player.prototype = Person.prototype;

// function Enemy(name) {
//     this.name = name;
//     this.marker = '^';
// }

// // Not again < Use Object.setPrototypeOf(Enemy.prototype, Person.prototype)
// Enemy.prototype = Person.prototype;

// Enemy.prototype.sayName = function() {
//     console.log('HAHAHAHAHAHHAHA');
// };

// const carl = new Player('carl', 'X');
// carl.sayName(); // this logs HAHAHAHAHAHAHAH 

// function hello(name) {
// return 'Hello ' + name + '!';
// }

// const message = hello('world');
// console.log(message);

// const message = (function(name) {
//     return 'Hello ' + name + '!';
// })('World');

// console.log(message);

// function sum(a, b) {
//     console.log(this === window);
//     this.myNumber = 20;
//     return a + b;
// }

// sum(15, 16);
// window.myNumber;

// console.log(this === window);

// function execute() {
//     'use strict';

//     function concat(str1, str2) {
//         console.log(this === undefined);
//         return str1 + str2;
//     }
//     concat('Hello', ' World!');
// }

// execute();
// // console.log(execute());

// function nonStrictSum(a, b) {
//     // non-strict mode
//     console.log(this === window);
//     return a + b;
// }

// function strictSum(a, b) {
//     'use strict';
//     console.log(this === undefined);
//     return a + b;
// }

// nonStrictSum(5, 6);

// strictSum(8, 12);

// 'use strict'
// const numbers = {
//     numberA: 5,
//     numberB: 10,

//     sum: function() {
//         'use strict'
//         console.log(this === numbers);

//         // function calculate() {
//         //     'use strict'
//         //     console.log(this === numbers);
//         //     return this.numberA + this.numberB;
//         // }

//         const calculate = () => {
//             console.log(this === numbers);
//             return this.numberA + this.numberB;
//         }
//         return calculate();
//     }
// };

// console.log(numbers.sum())

// const myObject = {
//     // helloMethod is a method
//     helloMethod: function() {
//         return 'Hello World';
//     }
// };

// const message = myObject.helloMethod();
// console.log(message);

// const words = ['Hello', 'World'];
// words.join(', '); //method invocation

// const obj = {
//     myMethod() {
//         return new Date().toString();
//     }
// };
// obj.myMethod(); // method invocation

// const func = obj.myMethod;
// func(); // function invocation
// parseFloat('16.6'); // function invocation
// isNaN(0); // function invocation

// this in a method invocation

// const calc = {
//     num: 0,
//     increment() {
//         console.log(this === calc);
//         this.num += 1;
//         return this.num;
//     }
// }

// console.log(calc.increment());

// const myDog = Object.create({
//     sayName() {
//         console.log(this === myDog);
//         return this.name;
//     }
// })

// myDog.name = 'Milo';
// console.log(myDog.sayName());

// class Planet {
//     constructor(name) {
//         this.name = name;
//     }

//     getName() {
//         console.log(this === earth);
//         return this.name;
//     }
// }

// const earth = new Planet('Earth');

// console.log(earth.getName())

// Pitfall: Separating method from its object


// console.log(23 + 96);

// console.log(233 + 23 + 2398 + 9878 + 987 + 97);

// console.log((4 + 6 + 9) / 77);

// let a = 10;
// console.log(a)
// console.log(a * 9);
// let b = 7 * a;
// console.log(b);

// let MAX = 57;
// let actual = MAX - 13;
// let percentage = actual / MAX;
// console.log(percentage);

var number = Number(prompt('Enter a number'));

function numberChecker() {
	if(number >= 10) {
		return true;
	} else {
		return false;
	}
}

console.log(numberChecker());