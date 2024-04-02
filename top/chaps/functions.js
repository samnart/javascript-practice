// let globalAge = 23; // This is a global variable

// function printAge(age) {
//     var varAge = 34;

//     if (age > 0) {
//         const constAge = age * 2;
//         console.log(constAge);
//     }

//     console.log(constAge);
// }

// printAge(globalAge);

// console.log(varAge);

// function makeAdding (firstNumber) {
//     const first = firstNumber;
//     return function resulting (secondNumber) {
//         const second = secondNumber;
//         return first + second;
//     }
// }

// const add5 = makeAdding(5);
// console.log(add5(2));

// function createUser (name) {
//     const discordName = "@" + name;

//     let reputation = 0;
//     const getReputation = () => reputation;
//     const giveReputation = () => reputation++;

//     return { name, discordName, getReputation, giveReputation };
// }

// const josh = createUser("josh");
// josh.giveReputation();
// josh.giveReputation();

// console.log({
//     discordName: josh.discordName,
//     reputation: josh.getReputation()
// });

// function createPlayer(name, level) {
//     const { discordName, getReputation } = createUser(name);

//     const increaseLevel = () => level++;
//     return { name, discordName, getReputation, increaseLevel };
// }

// function createPlayer(name, level) {
//     const user = createUser(name);
//     const increaseLevel = () => level++;
//     return Object.assign({}, user, { increaseLevel });
// }

const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

console.log(calculator.add(3, 5));
console.log(calculator.sub(6, 2));
console.log(calculator.mul(14, 5534));
console.log(calculator.div(49, 7));
