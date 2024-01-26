// // listen("click", function handler(evt){
// //     setTimeout( function request(){
// //         ajax( "http://some.url.1", function response(text){
// //             if (text == "hello") {
// //                 handler();
// //             }
// //             else if (text == "world") {
// //                 request();
// //             }
// //         });
// //     }, 500);
// // });



// // // A
// // ajax( "..", function(..){
// //     // C
// // });
// // // B


// // analytics.trackPurchase( purchaseData, function() {
// //     chargeCreditCard();
// //     displayThankyouPage();
// // });

// // var tracked = false;

// // analytics.trackPurchase( purchaseData, function() {
// //     if (!tracked) {
// //         tracked = true;
// //         chargeCreditCard();
// //         displayThankyouPage();
// //     }
// // } );

// function addNumbers(x, y) {
//     if (typeof x != "number" || typeof y != "number") {
//         throw Error( "Bad parameters" );
//     }

//     return x + y;
// }

// let sum = addNumbers( 21, '200' );
// console.log(sum);
// // addNumbers( 21, "21" );

// function success(data) {
//     console.log("Success! Data: ", data);
// }

// function failure(err) {
//     console.error( err );
// }

// ajax( "http://some.url.1", success, failure );

// function response(err, data) {
//     // error?
//     if (err) {
//         console.error( err );
//     }
//     // otherwise, assume success
//     else {
//         console.log( data );
//     }
// }

// ajax( "http://some.url.1", response );

'use strict'

// const { response } = require("express");

// fetch('httpsa://api.chucknorris.io/jokes/randomasdf')
//     .then((res) => {
//         res.json().then((data) => {
//             console.log(data);
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// function getWeather() {
//     return new Promise(function(resolve, reject) {
//         reject('Sunny');
//     })
// }

// const promise = getWeather();

// promise.then((data) => {
//     console.log(data);
// },
// (data) => {
//     console.log(`pokect slasher ${data}`);
// })

// console.log(promise.then());

// function fetchData() {
//     return new Promise( (resolve, reject) => {
//         fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
//             .then(response => response.json())
//             .then(data => resolve(data.properties.periods[13].shortForecast));
//     } );
// }

// function displayData(weather) {
//     console.log(weather);
// }

// function onError(err) {
//     console.log(`ERRRORRR:`, err);
// }

// fetchData()
//     .then(displayData)
//     .catch(onError)

const myDiv = document.querySelector('div#myDiv');

myDiv.addEventListener("click", function(event) {
    console.log("You clicked me!", event)
})

const array = [1, 2, 3, 4];

array.forEach(callback);

function callback(arg) {
    console.log(arg * 2);
}





$.ajax({
    type: "GET",
    url: "data/dogs.json",
    success: success, cats
})

function cats(data) {
    $.ajax({
        type: "GET",
        url: "data/cats.json",
        success: success, fish
        
    })
}

function fish(data) {
    console.log(data)
    $.ajax({
        type: "GET",
        url: "data/fish.json",
        success: success
    })
}

function success(data) {
    console.log(data);
}