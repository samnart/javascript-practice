// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));

// function pow1(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         return x * pow1(x, n-1);
//     }
// }
// console.log( pow1(2, 4) );


// let company = {
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
//     development: {
//         sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
//         internals: [{name: 'Jack', salary: 1300}]
//     }
// };

// function sumSalaries(department) {
//     if (Array.isArray(department)) {
//         return department.reduce((prev, current) => prev + current.salary, 0);
//     } else {
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum += sumSalaries(subdep);
//         }
//         return sum;
//     }
// }

// console.log(sumSalaries(company));

// function sumRange(n) {
//     if (n == 1) return 1;
//     return n + sumRange(n -1);
// }

// console.log(sumRange(3));

// function power(base, expo) {
//     if (expo == 0) return 1;
//     return base * power(base, expo - 1);
// }
// console.log(power(2, 0))

// function factorial(num) {
//     if (num == 1 || num == 0) return 1;
//     return num * factorial(num - 1);
// }
// console.log(factorial(0));

// function all(arr, call) {
//     arr.forEach(element => {
//         if(element < call) {
//             return true
//         } else {
//             return false
//         }
//     });
// }

// const aaa = all([1, 2, 9], 7);
// console.log(aaa)


function printChildren(t) {}

function printChildRecursive(t) {
    if (t.children.length === 0) {
        return
    }
    t.children.forEach( child => {
        console.log(child.name)
        printChildRecursive(child)
    })
}


const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Kyle', children: [] },
                { name: 'Sophia', children: [] }
            ]
        }
    ]
}

printChildRecursive(tree);