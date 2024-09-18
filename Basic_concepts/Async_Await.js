// Async/ Await = Async = makes a function return a promise
//                  Await = makes an async function wait for a promise

//                  Allows you write asynchronous code in a synchronous manner 
//                  Async doesn't have resolve or reject parameters
//                  Everything after Await is placed in an event queue

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

            const trahsTakenOut = true;
            if(trahsTakenOut) {
                resolve("You take out the trash 🚮");
            }
            else{
                reject("You DIDN't take out the trash");
            }
        },500);
    });
}

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTheTrashResult = await takeOutTheTrash();
        console.log(takeOutTheTrashResult);

        console.log("You finished all chores");
    }
    catch(error){
        console.error(error);
    }
}

doChores();
// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTheTrash()})
//          .then(value => {console.log(value); console.log("You finished all the chores!")})
//          .catch(error => console.error(error));
         