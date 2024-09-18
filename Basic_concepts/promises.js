
// Promises = An object thta manages asynchronous operations.
//              Wrap a Promise Object around {asynchronous code}
//              "I promise to return a value"
//              PENDING -> RESOLVED OR REJECTED
//              new Promises((resolve, reject) => {asychronous code});

// DO THESE CHORES in ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve("You walk the dog 🐕");
            }
            else {
                reject("you DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;
            if(kitchenCleaned) {
                resolve("You clean the kitchen 🧹");
            }
            else {
                reject("You DIDN't clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTheTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trahsTakenOut = false;
            if(trahsTakenOut) {
                resolve("You take out the trash 🚮");
            }
            else{
                reject("You DIDN't take out the trash");
            }
        },500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTheTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores!")})
         .catch(error => console.error(error));
         


// Callback Hell = Situation in Javascript where callbacks
//                  are nested within other callbacks to the
//                  degree where the code is difficult to read.
//                  Old pattern to handle asynchronous functions.
//                  Use Promises + asyc/await to avaid Callback hell

// function walkDog(callback) {
//     setTimeout(() => {
//         console.log("You walk the dog 🐕");
//         callback();
//     }, 1500);
// }

// function cleanKitchen(callback) {
//     setTimeout(() => {
//         console.log("You clean the kitchen 🧹");
//         callback();
//     }, 2500);
// }

// function takeOutTheTrash(callback) {
//     setTimeout(() => {
//         console.log("You take out the trash 🚮");
//         callback();
//     },500);
// }

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTheTrash(() => console.log("You finished all the chores!"));
//     });
// });