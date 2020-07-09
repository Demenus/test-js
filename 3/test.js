/**
 * We have provided a polyfill for promise inside the web.html file
 * In that way we will be able to use promise in older browsers such as IE
 */
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (Math.round(Math.random()) === 1) {
            resolve("Success!");
        } else {
            reject("Fail!");
        }
    }, 1000);
});

promise
    .then(function (successMessage) {
        console.log("Yes! " + successMessage);
    })
    .catch(function (failMessage) {
        console.log("No! " + failMessage);
    }); 

/**
 * This is a cross-browser way to emulate the previous behavior 
 * @param {(err, result) => void} callback 
 */
function promiseAsCallback(callback) {
    setTimeout(function () {
        if (Math.round(Math.random()) === 1) {
            callback(null, "Success!");
        } else {
            callback("Fail!");
        }
    }, 1000);
};

function handler(err, result) {
    if (err) {
        console.log("No! " + err);
        return;
    }
    console.log("Yes! " + result);
}

promiseAsCallback(handler);