'use strict';

// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

var db = firebase.firestore();
console.log("hello");

// db.collection("messages").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });

// db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

// db.collection("users").add({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });

async function start(){
    const testQs = await db.collection('users').get();
    for await (const doc of testQs.docs){
    console.log(doc.data());
    }
}

start();
