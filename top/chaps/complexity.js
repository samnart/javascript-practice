// function oddNumbersLessThanTen(maxNumber) {
//     let currentNumber = 1;

//     while(currentNumber < maxNumber) {
//         if (currentNumber % 2 != 0) {
//             console.log(currentNumber);
//         }
//         currentNumber++;
//     }
// }

// oddNumbersLessThanTen()

function findValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item == 1) {
      return item;
    }
  }
}
