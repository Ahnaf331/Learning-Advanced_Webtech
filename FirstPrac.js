console.log("Begin");

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = false;
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 1000);
});

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
console.log("End");
