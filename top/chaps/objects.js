// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//     this.sayName = () => {
//         console.log(this.name)
//     };
// }

// const player = new Player('Samuel', 'W');
// // console.log(player.name);
// // console.log(player.marker);
// player.sayName();

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  console.log(`My marker is '${this.marker}'`);
};

// Object.getPrototypeOf(Player.prototype);

Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);

const player1 = new Player("Steve", "X");
const player2 = new Player("also Steve", "O");

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = () => {
//         return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet`;
//     }
// }

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read");

// console.log(theHobbit.info())
