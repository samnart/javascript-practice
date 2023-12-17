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

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

const player = new Player('Sam', 'X');
console.log(player.name);

const Book = function(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Object.getPrototypeOf(player) === Player.prototype;
// Object.getPrototypeOf(player) 

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet`;
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tokien', 295, 'not read');

console.log(theHobbit.info());