// listen("click", function handler(evt){
//     setTimeout( function request(){
//         ajax( "http://some.url.1", function response(text){
//             if (text == "hello") {
//                 handler();
//             }
//             else if (text == "world") {
//                 request();
//             }
//         });
//     }, 500);
// });



// // A
// ajax( "..", function(..){
//     // C
// });
// // B


// analytics.trackPurchase( purchaseData, function() {
//     chargeCreditCard();
//     displayThankyouPage();
// });

// var tracked = false;

// analytics.trackPurchase( purchaseData, function() {
//     if (!tracked) {
//         tracked = true;
//         chargeCreditCard();
//         displayThankyouPage();
//     }
// } );

function addNumbers(x, y) {
    if (typeof x != "number" || typeof y != "number") {
        throw Error( "Bad parameters" );
    }

    return x + y;
}

let sum = addNumbers( 21, '200' );
console.log(sum);
// addNumbers( 21, "21" );

function success(data) {
    console.log("Success! Data: ", data);
}

function failure(err) {
    console.error( err );
}

ajax( "http://some.url.1", success, failure );

function response(err, data) {
    // error?
    if (err) {
        console.error( err );
    }
    // otherwise, assume success
    else {
        console.log( data );
    }
}

ajax( "http://some.url.1", response );