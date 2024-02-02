// const server = {
//     people: [
//         {
//             name: "Odin",
//             age: 20,
//         },
//         {
//             name: "Thor",
//             age: 35,
//         },
//         {
//             name: "Freyja",
//             age: 29,
//         },
//     ],

const { response } = require("express");

//     getPeople() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(this.people);
//             }, 2000);
//         })
//     }
// }

// async function f() {
//     return Promise.resolve(1);
// }

// f().then(console.log);

// let value = await Promise;

// async function f() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), 1000)
//     });

//     let result = await promise;

//     console.log(result); // done
// }

// function loadJson(url) {
//     return fetch(url)
//     .then(response => {
//         if (response.status == 200) {
//             return response.json();
//         } else {
//             throw new Error(response.status);
//         }
//     });
// }

// loadJson('https://javascript.info/no-such-user.json')
// .catch(console.log);

async function loadJson(url) {
    
    try {
        const response = await fetch(url);
        return response.json(); 
    } catch {
        throw new Error(response.status);
    }
}