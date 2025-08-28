"use strict";
function simulateTask2(time) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Task done in ${time}ms`), time);
    });
}
Promise.race([
    simulateTask2(1000),
    simulateTask2(2000),
    simulateTask2(500)
]).then(result => {
    console.log("First resolved:", result);
});
